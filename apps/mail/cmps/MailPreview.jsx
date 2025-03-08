const { useState } = React
// const { Link } = ReactRouterDOM

import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, onSelectMail, onDeleteMail, onToggleIsRead }) {

    const [isStarred, setIsStarred] = useState(mail.isStarred || false)
    const dateFormatted = utilService.getFormattedDate(mail.createdAt)

    function onToggleStarred(ev) {
        ev.stopPropagation()
        setIsStarred(!isStarred)
        mail.isStarred = !mail.isStarred
        mailService.save(mail)
            .then(starredMail => {
                console.log("Star toggled:", starredMail)

            })
            .catch(err => {
                console.error("Error updating star toggle:", err)
            })
    }
    function onHandleDelete(ev) {
        ev.stopPropagation()
        onDeleteMail(mail.id)
    }

    function onHandleToggleIsRead(ev) {
        ev.stopPropagation()
        onToggleIsRead(mail.id)
    }

    return (
        <tr
            className={`mail-preview ${mail.isRead ? 'read' : 'unread'}`}
            onClick={() => onSelectMail(mail.id)}>
            <td className="stars-col flex justify-center" onClick={onToggleStarred}>
                <span className={`star-icon ${isStarred ? 'starred' : ''}`} >
                    {isStarred ? '★' : '☆'}
                </span>
            </td>
            <td className="from-col">
                {mail.from}
            </td>
            <td className="subject-col">
                <span className="mail-subject">{mail.subject}... </span>
                <span className="mail-short-body">
                    {mailService.getShortBody(mail.body)}
                </span>
            </td>
            <td className="date-col">
                <div className="preview-action-buttons">
                    <button
                        title="Delete"
                        className="preview-delete-button"
                        onClick={onHandleDelete}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                    <button
                        className="preview-toggle-is-read"
                        onClick={onHandleToggleIsRead}>
                        {mail.isRead ?
                            <i className="fa-regular fa-envelope" title="Mark as unread"></i>
                            : <i className="fa-regular fa-envelope-open" title="Mark as read"></i>}
                        {/* <svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" class="T-I-J3 J-J5-Ji kQ9Vzb aoH"><path d="M168-192q-29.7,0-50.85-21.16T96-264.04V-696.28Q96-726 117.15-747T168-768H553q-2,17-1,35.5t6,36.5H168L480-517l140-81q14,13 37,24t41,16L480-432L168-611v347H792V-558.46q20-4.54 37.5-14.04T864-594v329.77Q864-234 842.5-213T792-192H168Zm0-504v432V-696Zm576,72q-50,0-85-35t-35-85t35-85t85-35t85,35t35,85t-35,85t-85,35Z"></path></svg> */}
                    </button>
                </div>
                <div className="mail-preview-date">
                    {dateFormatted}
                </div>
            </td>
        </tr>
    )

}

