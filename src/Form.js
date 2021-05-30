import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaContent, setIdeaContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
  }

  return (
    <form>
      <label htmlFor="idea-title-input">
        Enter your idea title here:
      </label>
      <input 
        type="text" 
        name="idea-title-input" 
        placeholder="Idea title..."
        value={ideaTitle}
        onChange={e => setIdeaTitle(e.target.value)}
        >
      </input>
      <label htmlFor="idea-content-input">
        Enter your idea here:
      </label>
      <input
        //type="text" 
        name="idea-content-input" 
        placeholder="Idea content..."
        value={ideaContent}
        onChange={e => setIdeaContent(e.target.value)}
      >
      </input>
      <button onClick={e => handleSubmit(e)}>
        Submit idea
      </button>
    </form>
  )
}

export default Form;