import React from 'react';
import axios from 'axios';
class Signin extends React.Component{ 
  state = {
    signedIn: false,
    username: '',
    password: '',
    users:[]
  }
  constructor(props){
		super(props);
    this.handleusernameChange = this.handleusernameChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
  }


  handleusernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlepasswordChange(event) {
    this.setState({password: event.target.value});
  }

  signin = async () => {
    
    let response = await axios.post('users', {
      username: this.state.username,
      password: this.state.password,
      headers: {
        "Content-Type": "application/json"
      }
    })
    
    .catch(error => {
      console.log(error)
    })

    console.log(response)
    this.setState({users:response.data, signedIn:true})
  }

  
  
  
  render(){
    const data = this.state.signedIn ? (
      <div>
        <h5> Signed In </h5>
        {this.state.users}

      </div>
      )
      : 
      (
        <div>
          <h4> Sign In </h4>
          <form>
            <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleusernameChange}/>
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handlepasswordChange} />
            </form>
            <button  onClick={this.signin.bind(this)}> Sign In </button>
        </div>
      )
    
    return(
      <div>
        {data}   
      </div>
    )
  }
}

export default Signin