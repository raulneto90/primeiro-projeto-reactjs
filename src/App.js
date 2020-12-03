import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response.data);
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

  return (
    <>
      <div className="container">
        <Header title="Projects" />
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <strong>{project.title}</strong>
              <div>
                <span>{project.owner}</span>
              </div>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
      </div>
    </>
  );
}

export default App;