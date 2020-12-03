import React, { useState } from 'react';

import Header from './components/Header';

import backgroundImage from './assets/image.jpeg';

import './App.css';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Frontend Web']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto - ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img src={backgroundImage} alt="background" width={300} />

      <ul>
        {projects.map(project => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;