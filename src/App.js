import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import IdeaContainer from './IdeaContainer';

function App() {
  const [ideas, addIdeas] = useState([{title: 'Test', content:'Test'}]);

  return (
    <div className="App">
      <Form ideas={ideas} addIdeas={addIdeas}/>
      <IdeaContainer ideas={ideas}/>
    </div>
  );
}

export default App;
