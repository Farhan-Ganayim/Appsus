export function NoteTodos({ note }) {
  const { info } = note
  const { todos } = info

  const renderTodos = () => {
    return (
      <section>
        <ul className="note-todos">
          <h3>{info.title}</h3>

          {todos.map((todo, index) => {
            return <li key={index}>{todo.txt}</li>
          })}
        </ul>
      </section>
    )
  }

  return renderTodos()
}
