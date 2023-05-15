import React from 'react'

const TaskComp = (props) => {
  return (
    <div className='task'>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.delete(props.id)}>X</button>
    </div>
  )
}

export default TaskComp