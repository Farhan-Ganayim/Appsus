const { useState } = React

const noteTypes = ['text', 'image', 'todos']

export function NoteForm() {
  // useState() will have initial value on the component render.
  // can have multiple different values - int's string's arrays, complex objects and so on.
  // State - Changes the ui and re render the component.
  //State will also store values.
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
    <section className="note-form" style={{ border: '1px solid red' }}>
      <div className="items-container">
        <input
          onChange={onHandleChange}
          value={userInput}
          type="text"
          placeholder={`Enter ${someValue.toUpperCase()} URL`}
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
