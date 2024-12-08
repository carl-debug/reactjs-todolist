export default function Todocard(props) {
    const {children, deleteTodo, editTodo, index} = props
    return (
      <li className='todoItem' >
          {children}
          <div className='actionsContainer'>
              <button onClick={() => {
                  editTodo(index)
              }}>
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
              </button>
              <button onClick={() => {
                  deleteTodo(index)
              }}>
                  <i className="fa-solid fa-trash-can"></i>
              </button>
          </div>
      </li>
    )
  }