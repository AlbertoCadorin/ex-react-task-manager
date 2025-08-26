import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './contextet/GlobalContext';
import DefaultLayout from './layouts/DefaulLayout';
import AddTask from './pages/AddTask';
import TaskList from './pages/TaskList';


function App() {
  return (
    < GlobalProvider >
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
