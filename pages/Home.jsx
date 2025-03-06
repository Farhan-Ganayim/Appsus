import { showSuccessMsg } from '../services/event-bus.service.js'
const { Link } = ReactRouterDOM

export function Home() {
    return <section className="home-container home">
        <h1>Welcome home</h1>
        <p>Your all-in-one solution for Email, Notes, and Books.</p>
        {/* <button onClick={() => showSuccessMsg('Yep, that works')}>Show Msg</button> */}
        <div className="box-container">
            <div className="box box1">
                <Link to="/mail">
                    <img className="mail-icon" src="./assets/img/mail6.png" alt="" />
                </Link>
            </div>
            <div className="box box2">
                <Link to="/note">

                    <img className="note-icon" src="./assets/img/note3.png" alt="" />
                </Link>

            </div>
            <div className="box box3">
                <Link to="/books">
                    <img className="book-icon" src="./assets/img/books.png" alt="" />
                </Link>

            </div>
        </div>
    </section>
}