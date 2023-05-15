import React, {useState} from 'react'
import './Exercise.css'
import Task from './Task';

const Exercise = () => {
  // state
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // handle function
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  // function add Task
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  }

  // function delete Task
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  // function Update Task 
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
          <input onChange={handleChange}/>
          <button onClick={addTask}> Add Task </button> 
      </div>

      <div className='list'>
        {/* display */}
        {todoList.map((text) => {
          return (
            <Task 
              taskName={text.taskName}
              id={text.id}
              completed={text.completed}
              delete={deleteTask}
              completeTask={completeTask}/>
          )
        })}
      </div>
    </div>
  )
}

export default Exercise