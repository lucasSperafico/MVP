import React from 'react';
import './App.css';
import Header from './Components/Header';
import NewTraining from './Pages/NewTraining';

function App() {
  return (
    <>
      <Header />
      <main className="page-content">
        <NewTraining />
      </main>
    </>
  );
}

export default App;