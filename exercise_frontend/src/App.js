import React from 'react';
import './App.css';
import Newuser from './Newuser';
import Signin from './SignIn';

class App extends React.Component{ 
  
  
  render(){
    
    return (
      <div className="App">
        <Newuser />
        <Signin />
      </div>
    );
  }
}

export default App;
