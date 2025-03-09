import { notesService } from '../services/note.service.js'

const { useState } = React

const noteTypes = [
  <span className="fa-regular fa-file-lines"></span>,
  <span className="fa-solid fa-rectangle-list"></span>,
  <span className="fa-solid fa-image"></span>,
]

export function NoteAdd() {
  const [userInput, setUserInput] = useState('')

  function onSetNoteType(noteType) {
    setSomeValue(noteType)
  }

  function onHandleChange(ev) {
    setUserInput(ev.target.value)
  }

  return (
    <section className="note-input-container">
      <div className="input-items">
        <input
          onChange={onHandleChange}
          value={userInput}
          type="text"
          placeholder={`Text here`}
        />

        {noteTypes.map((noteType) => (
          <button key={noteType} onClick={() => onSetNoteType(noteType)}>
            {noteType}
          </button>
        ))}
      </div>
    </section>
  )
}
