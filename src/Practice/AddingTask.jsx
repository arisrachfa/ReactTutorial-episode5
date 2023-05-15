import React, { useState } from 'react'
import '../App.css'

const AddingTask = () => {
    // Ini adalah state yang dimana todoList merupakan variabel yang menyimpan value sekarang, 
    // dan setTodoList merupakan variabel untuk merubah value dari state selanjutnya
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    // ini adalah handle (function) untuk merubah isi dari state
    // n.b = "e" adalah singkatan dari event yaitu default paramater dan bebas diganti nama
    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    // (...) titik 3 merupakan spread operator yang menginisialisasi semua data dari state tooList
    const addTask = () => {
        setTodoList([...todoList, newTask]);
    }

    return (
        <div className='App'>
            <div className='addTask'>
                <input onChange={handleChange}/>
                <button onClick={addTask}> Add Task </button> 
            </div>

            {/* Display */}
            <div className='list'>
                {todoList.map((text) => {
                    return <h1>{text}</h1>
                })}
            </div>
        </div>
  )
}

export default AddingTask