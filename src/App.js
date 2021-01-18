import React from 'react';
import Navbar from './components/Navbar';
import TaskContextProvider from './contexts/TaskContext';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TaskList />
        <NewTaskForm />
      </TaskContextProvider>
    </div>
  );
}

export default App;
