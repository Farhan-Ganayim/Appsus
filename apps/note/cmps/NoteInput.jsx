import { notesService } from '../services/note.service.js'
import { surveyService } from '../services/survey.service.js'

const { useState } = React

const noteTypes = ['text', 'image', 'todos']

export function NoteInput() {
  const [someValue, setSomeValue] = useState(noteTypes[0])
  const [userInput, setUserInput] = useState('')

  function onSetNoteType(noteType) {
    console.log('noteType:', noteType)
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
          placeholder={`Enter ${someValue.toUpperCase()}`}
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
