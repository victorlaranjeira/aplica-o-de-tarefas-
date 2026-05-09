import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import AddTask from './pages/AddTask';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <nav style={{ padding: '1rem', background: '#f4f4f4' }}>
          <Link style={{ marginRight: '10px' }} to="/">Home</Link>
          <Link to="/add-task">Nova Tarefa</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;