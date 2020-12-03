import React, { useState, useEffect } from 'react';
import api from './services/api';
import { FiX } from 'react-icons/fi';

import Header from './components/Header';

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });

  }, []);

  async function handleAddProject() {
    const response = await api.post('/projects', {
      title: `Novo projeto - ${Date.now()}`,
      owner: "Raul Neto"
    })

    setProjects([...projects, response.data]);
  }

  async function handleRemoveProject(id) {
    await api.delete(`/projects/${id}`);

    setProjects(projects.filter(project => project.id !== id));
  }

  return (
    <>
      <div className="container">
        <Header title="Projects" />
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <div>
                <strong>{project.title}</strong>
                <span>{project.owner}</span>
              </div>
              <button onClick={() => handleRemoveProject(project.id)}>
                <FiX size={20} />
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
      </div>
    </>
  );
}

export default App;