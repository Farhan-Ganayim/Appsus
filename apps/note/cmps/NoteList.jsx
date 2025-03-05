const { Link } = ReactRouterDOM

import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onRemoveNote }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id}>
          <NotePreview note={note} />
          <section>
            <button onClick={() => onRemoveNote(note.id)}>
              <span className="fa-solid fa-trash"></span>
            </button>
          </section>
        </li>
      ))}
    </ul>
  )
}
