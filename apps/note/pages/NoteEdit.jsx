import { notesService } from '../services/note.service.js'

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

export function NoteEdit() {
  const [noteToEdit, setNoteToEdit] = useState(notesService.getEmptyNote())
  console.log('NoteToEdit:', noteToEdit)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!noteId) return

    loadNote()
  }, [])

  function loadNote() {
    notesService.get(noteId).then(setNoteToEdit)
  }

  function onSave(ev) {
    ev.preventDefault()

    notesService
      .save(noteToEdit)
      .then(() => showSuccessMsg('Note has successfully saved!'))
      .catch(() => showErrorMsg(`couldn't save Note`))
      .finally(() => navigate('/Note'))
  }

  function handleChange({ target }) {
    const { type, name: prop } = target
    let { value } = target

    switch (type) {
      case 'noteTxt':
        value = +value
        break
    }
    setNoteToEdit((prevNote) => ({ ...prevNote, [prop]: value }))
  }

  const { info } = noteToEdit

  return (
    <section className="note-edit">
      {!params.noteId}

      <form onSubmit={onSave}>
        <label className="bold-txt" htmlFor="txt">
          text:{' '}
        </label>
        <input
          onChange={handleChange}
          value={info.txt}
          id="text"
          type="text"
          name="title"
        />
        <button>Save</button>
      </form>
    </section>
  )
}
