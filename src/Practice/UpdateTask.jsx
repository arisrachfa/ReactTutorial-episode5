import React, {useState} from 'react'
import '../App.css'

const UpdateTask = () => {
  // state
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // handle function
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  //  function add (CREATE)
  const addTask = () => {
    const task = {
      // maksud dari code ini merupakan, 'id' akan diisi dengan nilai 1 jika 'todoList' masih kosong, 
      // atau diisi dengan nilai 'id' terakhir ditambah 1 jika todoList sudah memiliki task.
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  }

  // Function complete (UPDATE)
  const completeTask = (id) => {
    setTodoList(todoList.map((text) => {
      if (text.id === id) {
        return {...text, completed: true};
      }else {
        return text;
      }
    }))
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* diplay */}
      <div className='list'>
        {todoList.map((text) => {
            return (
              <div style={{backgroundColor: text.completed ? "green" : "white"}}>
                <h1>{text.taskName}</h1>
                <button onClick={() => completeTask(text.id)}>complete</button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default UpdateTask