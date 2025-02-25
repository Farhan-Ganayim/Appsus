const { useState } = React
import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {

    console.log(mail)
    const [isStarred, setIsStarred] = useState(mail.isStarred || false)

    function getDate(timeStamp) {
        const date = new Date(timeStamp)
        const day = date.getDate()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const month = months[date.getMonth()]
        const year = date.getFullYear()
        const currYear = new Date().getFullYear()
        console.log(year)
        console.log("currYear", currYear)
        if (year !== currYear)
            return year
        else return `${month} ${day}`

    }
    // console.log(getDate(1551103930500))

    function onToggleStarred(ev) {
        setIsStarred(!isStarred)
        mail.isStarred = !mail.isStarred
        // console.log('starred', mail);

    }


    return (
        <tr className="mail-preview">
            <td className="stars-col flex justify-center" onClick={onToggleStarred}>
                <span className={`star-icon ${isStarred ? 'starred' : ''}`} >
                    {isStarred ? '★' : '☆'}
                </span>
            </td>
            <td className="from-col">
                {mail.from}
            </td>
            <td className="subject-col flex">
                <span className="mail-subject">{mail.subject}...</span>  
                <span className="mail-body">{mail.body} {utilService.makeLorem(5)}</span> 
            </td>
            <td className="date-col">
                {getDate(mail.sentAt)}
            </td>
        </tr>
    )

}

