import React from 'react';
import './App.css';
import AuthorInfo from './components/AuthorInfo';
import ProjectList from './components/ProjectList';

function App() {
    return (
        <div className="App">
            <h1>Резюме</h1>
            <AuthorInfo />
            <h2>Проекты</h2>
            <ProjectList />
        </div>
    );
}

export default App;