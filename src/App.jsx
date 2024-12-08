import { useState, useEffect } from "react";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/TodoList";

function App() { 
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState ('');

  function persistData (newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }


  function addTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  } 

  function deleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList); // Fix: Update state to trigger re-render
  }

  function editTodo (index) {
    const valueToBeEdited= todos [index]
    setTodoValue(valueToBeEdited)
    deleteTodo(index)

  }

  useEffect(() => {
    if (!localStorage) {
      return
  }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    
    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [] )
  

  return (
    <>
      <TodoInput todoValue= {todoValue} setTodoValue={setTodoValue} addTodos={addTodos} />
      <TodoList deleteTodo={deleteTodo} editTodo={editTodo} todos={todos} />
    </>
  );
}

export default App;
