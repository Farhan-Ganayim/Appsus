
const { useEffect, useState } = React
// const [searchParams, setSearchParams] = useSearchParams()

import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailFolderList } from "../cmps/MailFolderList.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { MailCompose } from "../cmps/MailCompose.jsx"
import { MailDetails } from "./MailDetails.jsx"

export function MailIndex() {

    const [mails, setMails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [isCompose, setIsCompose] = useState(false)
    const [selectedMailId, setSelectedMailId] = useState(null)

    const [isFoldersOpen, setIsFoldersOpen] = useState(false)

    useEffect(() => {
        loadMails()
        // console.log('FFFFFFFFFF',filterBy)
    }, [filterBy])

    useEffect(() => {
        if (isFoldersOpen && window.innerWidth <= 600) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isFoldersOpen])

    function loadMails() {
        mailService.query(filterBy)
            .then(mails => {
                console.log(mails)
                setMails(mails)
            })
            .catch(err => {
                console.error('Error in loading mails:', err)
            })
    }

    function onSetFilterBy(filterBy) {
        setFilterBy({ ...filterBy })
    }

    function onSelectMailFolder(folder) {
        setFilterBy(prevFilter => ({ ...prevFilter, status: folder }))
        setSelectedMailId(null)
        toggleMenu()
    }
    function onMailSent() {
        loadMails()
    }

    function onMailDeleted() {
        loadMails()
    }

    function toggleCompose() {
        setIsCompose(prevModal => !prevModal)
    }

    function onSelectMail(mailId) {
        setSelectedMailId(mailId)
    }

    function toggleMenu() {
        setIsFoldersOpen(menuOpen => !menuOpen)
    }

    function onDeleteMail(mailId) {
        mailService.getById(mailId)
            .then(mail => {
                if (!mail.removedAt) {
                    const removedMail = { ...mail, removedAt: Date.now() }
                    mailService.save(removedMail)
                        .then(() => {
                            loadMails()
                        })
                } else {
                    mailService.remove(mailId)
                        .then(() => {
                            loadMails()
                        })
                }
            })
            .catch(err => {
                console.error("Error deleting mail:", err)
            })
    }

    function onToggleIsRead(mailId) {
        mailService.getById(mailId)
            .then(mail => {
                mail.isRead = !mail.isRead
                mailService.save(mail)
                    .then(() => {

                        loadMails()
                    })
            })
            .catch(err => {
                console.error("Error changing mail status:", err)
            })
    }

    return (
        <section >
            <button
                className="hamburger-btn"
                onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <section className="mail-index-container flex">

                <div className="mobile-folders-container">
                    <button
                        className="compose-btn"
                        onClick={toggleCompose}>
                        <i className="fa-solid fa-pencil"></i> Compose
                    </button>
                    <div className={`mobile-folders ${isFoldersOpen ? 'open' : ''}`}>

                        <MailFolderList
                            currFolder={filterBy.status}
                            onSelectMailFolder={onSelectMailFolder}
                        />
                    </div>
                    {isFoldersOpen && (
                        <div className="mobile-overlay" onClick={toggleMenu}></div>
                    )}
                </div>

                <div className="mail-filter-list">

                    <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
                    {selectedMailId ? (
                        <MailDetails
                            mailId={selectedMailId}
                            onBack={() => {
                                setSelectedMailId(null)
                                onMailSent()
                            }}
                            onMailDeleted={onMailDeleted}
                        />
                    ) : (

                        <MailList
                            mails={mails}
                            onSelectMail={onSelectMail}
                            onDeleteMail={onDeleteMail}
                            onToggleIsRead={onToggleIsRead} />
                    )}
                    {
                        isCompose && (
                            <MailCompose
                                onClose={toggleCompose}
                                onMailSent={onMailSent} />
                        )
                    }
                </div>
            </section>
        </section>)
}



