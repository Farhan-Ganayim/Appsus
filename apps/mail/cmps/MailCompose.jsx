import { mailService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"

const { useState } = React

export function MailCompose({ onClose, onMailSent }) {

    const [mailToCompose, setMailToCompose] = useState(mailService.getEmptyMail())
    console.log('CCCCCCCCCCCCCCC', mailToCompose)

    function handleChange({ target }) {
        let { name, value } = target
        setMailToCompose(prevMail => ({ ...prevMail, [name]: value }))
    }

    function onSaveMail(ev) {
        ev.preventDefault()
        mailService.save(mailToCompose)
            .then(savedMail => {
                console.log("Mail Saved: ", savedMail)
                setMailToCompose(mailService.getEmptyMail())
                onMailSent()
            })
            .catch(err => {
                console.error("Error in saving mail: ", err)
            })
    }

    function onCancelMail(ev) {
        ev.preventDefault()
        const draftMail = { ...mailToCompose, sentAt: null }
        mailService.save(draftMail)
            .then(savedDraft => {
                console.log("Draft saved:", savedDraft)
                onMailSent()
                onClose()
            })
    }

    return (
        <section className="mail-compose-modal">
            <h3>New Message</h3>
            <form onSubmit={onSaveMail} >
                <label htmlFor="to">To </label>
                <input name="to" type="text" id="to" value={mailToCompose.to} onChange={handleChange} />
                <label htmlFor="subject">Subject </label>
                <input name="subject" type="text" id="subject" value={mailToCompose.subject} onChange={handleChange} />
                <input name="body" type="text" value={mailToCompose.body} onChange={handleChange} />
                <div className="mail-compose-actions">
                    <button>Send</button>
                    <button onClick={onCancelMail}>Cancel</button>
                </div>
            </form>

        </section>
    )

}
