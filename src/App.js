import React from 'react';
import './App.css';
import Toast from './components/Toast';

function App() {
  return (
    <div className="App">
      <Toast severity={'error'} text={'A simple danger alert-- check it out!'}/>
    </div>
  );
}

export default App;
