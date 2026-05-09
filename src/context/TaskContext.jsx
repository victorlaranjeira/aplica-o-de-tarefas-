import React, { createContext, useState, useEffect, useRef } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

 
  const editTask = (taskId, newTitle) => {
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === taskId ? { ...task, title: newTitle } : task
    ));
  };

  return (
    
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};