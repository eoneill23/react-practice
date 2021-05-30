import React from 'react';
import './IdeaContainer.css';
import Idea from './Idea';

function IdeaContainer({ideas}) {
  console.log("ideas", ideas)
  const ideaList = ideas.map((idea) => {
    return <Idea title={idea.title} content={idea.content}/>
  });
  return (
    <div>
      {ideaList}
    </div>
  )
}

export default IdeaContainer;