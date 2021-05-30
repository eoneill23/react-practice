import React from 'react';
import './Idea.css';

function Idea({title, content}) {
  return (
    <div>
      <h1>{title}</h1>
      <section>{content}</section>
    </div>
  )
}

export default Idea;