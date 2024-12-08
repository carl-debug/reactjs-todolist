import { useState } from "react"

export default function TodoInput (props) {
    const {addTodos, todoValue, setTodoValue} = props;
    
    return (
        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Enter to do (˶ᵔ ᵕ ᵔ˶)" />
            <button onClick={()=>{
                    addTodos(todoValue)
                    setTodoValue('')
            }}> 
                Confirm</button>
        </header>
    )
}