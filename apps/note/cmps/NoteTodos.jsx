export function NoteTodos({ note }) {
  const { info } = note
  const { todos } = info

  const renderTodos = () => {
    return (
      <div>
        <h2>{info.title}</h2>
        {todos.map((todo, index) => {
          return (
            <div key={index + todo.txt}>
              <h3>{todo.txt}</h3>
            </div>
          )
        })}
      </div>
    )
  }

  return <section className="note-todos">{renderTodos()}</section>
}
