export function NoteImg({ note }) {
  const { info } = note

  return (
    <section>
      <img src={info.url} alt="" />
      <h4>{info.title}</h4>
    </section>
  )
}
