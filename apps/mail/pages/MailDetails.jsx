import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function MailDetails({ mailId, onBack, onMailDeleted }) {

    // const params = useParams()
    // console.log('hhhhhhhhhhhhh', params);
    const [mail, setMail] = useState(null)

    useEffect(() => {
        if (!mailId) return
        else {
            mailService.getById(mailId)

                .then(mail => {
                    setMail(mail)
                })
                .catch(err => {
                    console.error('Error in loading mail:', err)
                })
        }
    }, [mailId])

    const navigate = useNavigate()

    function OnRemoveMail() {
        if (!mail.removedAt) {
            const removedMail = { ...mail, removedAt: Date.now() }
            mailService.save(removedMail)
                .then(() => {
                    onMailDeleted()
                    onBack()
                })
                .catch(err => {
                    console.error('Error on moving to trash:', err)
                })
        } else {
            mailService.remove(mailId)
                .then(() => {
                    onMailDeleted()
                    onBack()
                })
                .catch(err => {
                    console.error('Could not remove mail:', err)
                })
        }
    }

    if (!mail) return <div>Loading mail...</div>
    const { from, to, subject, body, sentAt } = mail

    return (
        <section className="mail-details">
            <header className="mail-header flex">
                <h3 className="mail-subject">{subject}</h3>
                <section className="mail-action-btns flex">

                    <button onClick={onBack}>
                        <img src="../../../assets/img/back.png" alt="Back to mails" />
                    </button>
                    <button onClick={() => OnRemoveMail()}>
                        <img src="../../../assets/img/delete-icon.png" alt="Delete mail" />
                    </button>
                </section>
            </header>
            <p><span>From: </span>{from}</p>
            <div className="mail-sent-info flex space-between">
                <p><span>to: </span>{to}</p>
                <p><span>Sent at: </span>{utilService.getFormattedDate(sentAt)}</p>
            </div>
            <div className="mail-body">
                <p>{body}</p>
            </div>
        </section>
    )
}