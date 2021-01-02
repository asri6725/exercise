import React from 'react';
import axios from 'axios';
import Users from './Users';
class Signin extends React.Component{ 
  constructor(props){
		super(props);
		this.state = {
      signedIn: false,
      username: '',
      password: '',
      users:[]
    }
    this.handleusernameChange = this.handleusernameChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    //this.signin = this.signin.bind(this)
  }


  handleusernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlepasswordChange(event) {
    this.setState({password: event.target.value});
  }
/*
  signin () {
    
    axios.post('http://localhost:8080/users', {
      username: this.state.username,
      password: this.state.password,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
    })
  }
*/
  signout(){
    this.setState({users:[], signedIn: false})
  }

  
  
  render(){
    // var users = "hello"
    // const data = this.state.signedIn ? (
    //   <div>
    //     <h5 onClick={this.signout()}> SignOut </h5>
       
    //   </div>
    //   )
    //   : 
    //   (
    //     <div>
    //       <h4> Sign In </h4>
    //       <form action="/send" method="POST">
    //         <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleusernameChange}/>
    //         <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handlepasswordChange} />
    //         <button type = "Submit" name="Send"> Send </button>
    //         </form>
    //         {/*<button  onClick={ () => this.setState({users:this.signin, signedIn:true})}> Sign In </button>*/}
    //     </div>
    //   )
    
    return(
      <div>
        <h4> Sign In </h4>
          <form action="http://localhost:8080/users" method="POST">
            <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleusernameChange}/>
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handlepasswordChange} />
            <button type = "Submit" name="Send"> Send </button>
            </form>
      </div>
    )
  }
}

export default Signin