import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput"  style={props.style}>
      <p><strong>{props.username} says:</strong> coo coo ca chaw. Coo coo ca chaw. This is not me encouraging you to go here and write a review.</p>
      <p>No. Butterscotch! Want a lick? Someone order 140 pounds of upper body strength? I don't want no part of yo tight-ass country-club, ya freak bitch!</p>
    </div>
  )
}

export default userOutput;