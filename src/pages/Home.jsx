import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Home = () => {
  const { tasks, removeTask, toggleTask, editTask } = useContext(TaskContext);

  const handleEdit = (task) => {
    // Captura a resposta do prompt
    const newTitle = prompt("Editar tarefa:", task.title);
    
    // CORREÇÃO: Verifica se não é nulo (caso o usuário clique em Cancelar)
    // e se o texto não está vazio após remover espaços.
    if (newTitle !== null && newTitle.trim() !== "") {
      editTask(task.id, newTitle.trim());
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Minhas Tarefas</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} className="task-card">
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(task.id)}
                style={{ marginRight: '15px', cursor: 'pointer', transform: 'scale(1.2)' }}
              />
              
              <span 
                style={{ 
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#7c7c8a' : 'inherit',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
                onClick={() => toggleTask(task.id)}
              >
                {task.title}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-edit" onClick={() => handleEdit(task)}>Editar</button>
              <button className="btn-del" onClick={() => removeTask(task.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;