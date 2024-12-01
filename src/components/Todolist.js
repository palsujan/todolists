import React from 'react'

const Todolist = ({todos}) => {
  return (
    <div className='todo-row'>
        {todos.map((todo)=>(
            <div key={todo?.id} className="todo-col">
                <p>
                    UserId: {todo.id}
                </p>
                <p>{todo?.todo}</p>
            </div>
        ))}
    </div>
  )
}

export default Todolist;