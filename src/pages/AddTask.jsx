import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    addTask(title);
    navigate('/'); // Redireciona para a lista após salvar
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Criar Nova Tarefa</h1>
      
      <div className="task-card" style={{ display: 'block', padding: '2rem' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label htmlFor="task-title" style={{ color: '#7c7c8a', fontSize: '0.9rem' }}>
            O que você pretende realizar?
          </label>
          
          <input 
            id="task-title"
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Ex: Estudar"
            autoFocus
            style={{ 
              width: '100%', 
              boxSizing: 'border-box',
              fontSize: '1rem' 
            }}
          />
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button 
              className="btn-edit" 
              type="submit" 
              style={{ flex: 1, padding: '12px' }}
            >
              Salvar Tarefa
            </button>
            
            <button 
              className="btn-del" 
              type="button" 
              onClick={() => navigate('/')}
              style={{ flex: 1, padding: '12px', background: '#323238' }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;