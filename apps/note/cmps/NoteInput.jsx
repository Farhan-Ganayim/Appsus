import { notesService } from '../services/note.service.js'

const { useState } = React

const noteTypes = ['noteTxt', 'NoteImg', 'noteTodos']

export function NoteInput() {
  const [userInput, setUserInput] = useState(null)

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
