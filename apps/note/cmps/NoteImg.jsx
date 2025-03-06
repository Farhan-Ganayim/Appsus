export function NoteImg({ note }) {
  const { info } = note

  return (
    <section>
      <img src={info.url} alt="" />
    </section>
  )
}
