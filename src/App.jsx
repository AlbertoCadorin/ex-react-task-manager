import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaulLayout';
import AddTask from './pages/AddTask';
import TaskList from './pages/TaskList';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} />
          <Route path="/" element={<TaskList />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
