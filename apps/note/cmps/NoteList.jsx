const { Link } = ReactRouterDOM

import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onRemoveNote }) {
  return (
    <div className="note-list-container">
      <ul className="note-list">
        {notes.map((note) => (
          <li className="note-card" key={note.id}>
            <NotePreview note={note} />
            <section>
              <Link to={`/note/edit/${note.id}`}>
                <button>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </Link>
              <button onClick={() => onRemoveNote(note.id)}>
                <span className="fa-solid fa-trash"></span>
              </button>
            </section>
          </li>
        ))}
      </ul>
    </div>
  )
}
