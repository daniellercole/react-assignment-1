import React from 'react';

const userInput = (props) => {
  return (
    <input className="UserInput" type="text" onChange={props.changed} value={props.username} style={props.style}/>
  )
}

export default userInput;