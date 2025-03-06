import { notesService } from '../services/note.service.js'

const { useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect } = React

export function NoteEdit() {
  const [noteToEdit, setNoteToEdit] = useState(notesService.getEmptyNote())

  console.log('NoteToEdit:', noteToEdit)

  const navigate = useNavigate()
  const { noteId } = useParams()

  useEffect(() => {
    if (!noteId) return

    loadNote()
  }, [])

  function loadNote() {
    notesService
      .get(noteId)
      .then(setNoteToEdit)
      .catch((err) => console.log('err:', err))
  }

  function onSaveNote(ev) {
    console.log('noteToEdit:', noteToEdit)
    ev.preventDefault()
    notesService
      .save(noteToEdit)
      .then(() => navigate('/note'))
      .catch((err) => console.log('err:', err))
  }

  function handleChange(ev) {
    ev.preventDefault()
    let { value } = ev.target

    setNoteToEdit((prevNote) => ({ ...prevNote, info: { txt: value } }))
  }

  return (
    <section className="note-edit">
      <form onSubmit={onSaveNote}>
        <textarea
          type="text"
          value={noteToEdit.info.txt}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
    </section>
  )
}
