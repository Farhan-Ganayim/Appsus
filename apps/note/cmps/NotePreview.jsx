import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'

export function NotePreview({ note, txt, noteType }) {
  const getNoteToRender = () => {
    switch (note.type) {
      case 'NoteTxt':
        return <NoteTxt note={note} />
      case 'NoteImg':
        return <NoteImg note={note} />
      case 'NoteTodos':
        return <NoteTodos note={note} />
      default:
        return (
          <div className="note-preview">
            note={note}
            txt={txt}
            noteType={noteType}
          </div>
        )
    }
  }

  return getNoteToRender()
}
