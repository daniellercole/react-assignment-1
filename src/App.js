import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './UserInput/UserInput.css';
import './UserOutput/UserOutput.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: 'danielle' },
      { username: 'sam' }
    ]
  }; 

  userInputHandler = (event) => {
    this.setState({ 
      users: [
        { username: event.target.value }, 
        { username: 'sam' }
      ]
    })
  }
  
  render() { 
    const inputStyles = {
      backgroundColor: 'palegoldenrod',
      fontSize: '18px'
    } 

    const outputStyles = {
      fontStyle: 'italic',
      fontFamily: 'Helvetica'
    }

    return (
      <div className="App">
        <header className="App-header"> 
          <UserInput style={inputStyles} changed={this.userInputHandler}/>
          <UserOutput style={outputStyles} username={this.state.users[0].username}/>
          <UserOutput style={outputStyles} username={this.state.users[1].username} />
        </header>
      </div>
    );
  }
}

export default App; 
