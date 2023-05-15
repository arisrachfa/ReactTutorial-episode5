import React,{useState} from 'react'
import '../App.css'

const DeleteTask = () => {
  // ini adalah state
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  // function handle untuk merubah nilai dari state
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    // membuat array kosong dari todoList mempunyai value object task yang terdiri dari id dan taskName
    // yang dimana taskName sendiri merupakan value dari state newTask 
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className='App'>
      <div className='addTask'>
          <input onChange={handleChange}/>
          <button onClick={addTask}> Add Task </button> 
      </div>

      {/* Display */}
      <div className='list'>
        {todoList.map((text) => {
          return (
            <div>
              <h1>{text.taskName}</h1>
              <button onClick={() => deleteTask(text.id)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DeleteTask