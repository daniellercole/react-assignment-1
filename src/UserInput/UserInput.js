import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  const inputStyles = {
    backgroundColor: 'palegoldenrod',
    fontSize: '18px'
  } 

  return <input 
    style={inputStyles}
    className="UserInput" 
    type="text" 
    onChange={props.changed} 
    value={props.currentName}/>
}

export default userInput;