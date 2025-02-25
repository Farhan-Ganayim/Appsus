import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function MailDetails() {

    const params = useParams()
    console.log('hhhhhhhhhhhhh', params);

    const [mail, setMail] = useState(null)
    useEffect(() => {
        if (!params.mailId) return
        else {
            mailService.getById(params.mailId)

                .then(mail => {
                    setMail(mail)
                })
                .catch(err => {
                    console.error('Error in loading mail:', err)
                })
        }
    }, [params.mailId])

    const navigate = useNavigate()

    function OnRemoveMail() {
        mailService.remove(params.mailId)
            .then(() => {
                navigate('/mail')
            })
            .catch(err => {
                console.error('Could not remove mail:', err)
            })
    }

    if (!mail) return <div>Loading mail...</div>
    const { from, to, subject, body, sentAt } = mail

    return (
        <section className="mail-details">
            <header className="mail-header">
                <h3 className="mail-subject">{subject}</h3>
                <button onClick={() => navigate('/mail')}>Back</button>
                <button onClick={() => OnRemoveMail()}>Delete</button>
            </header>
            <p><span>From: </span>{from}</p>
            <p><span>to: </span>{to}</p>
            <p><span>Sent at: </span>{sentAt}</p>
            <div className="mail-body">
                <p>{body} {utilService.makeLorem(40)}</p>
            </div>
        </section>
    )
}