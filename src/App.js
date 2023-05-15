// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

// style
import './App.css';

// page
import AddingTaskPage from './Page/AddingTaskPage'
import DeleteTaskPage from './Page/DeleteTaskPage'
import UpdateTaskPage from './Page/UpdateTaskPage'
import DeleteTaskCompPage from './Page/DeleteTaskCompPage'
import ExercisePage from './Page/ExercisePage';

function App() {
  return (
    <Router>
      <div className="navigation">
        <Link to='/'>Create</Link>
        <Link to='/delete'>Delete</Link>
        <Link to='/update'>Update</Link>
        <Link to='/deleteComp'>Delete Comp</Link>
        <Link to='/crud'>Exercise</Link>
      </div>

      <Routes>
        <Route path='/' exact element={<AddingTaskPage/>} />
        <Route path='/delete' element={<DeleteTaskPage/>} />
        <Route path='/update' element={<UpdateTaskPage/>} />
        <Route path='/deleteComp' element={<DeleteTaskCompPage/>} />
        <Route path='/crud' element={<ExercisePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
