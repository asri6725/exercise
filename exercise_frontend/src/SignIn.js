import React from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core/';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Signin extends React.Component{ 
  state = {
    signedIn: false,
    displayform:false,
    username: '',
    password: '',
    users:[['ID', 'First Name', 'Last Name', 'Date', 'Email Address', 'Phone Number', 'Fund Type', 'Amount']]
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
    
    await axios.post('/users', {
      username: this.state.username,
      password: this.state.password,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response =>{
      console.log(response)
      this.setState({users:this.state.users.concat(response.data), signedIn:true})
      })
    
    .catch(error => {
      console.log(error)
    })

    
  }

  
  displayform = () =>{
    this.state.displayform?this.setState({displayform:false}) : this.setState({displayform:true})
  }
  
  
  render(){
    
    const form = this.state.displayform?(
      <div>
        <form>
          <TextField  label="username" name="username" value={this.state.username} onChange={this.handleusernameChange} />
          <TextField  label="password" type="password" name="password"  value={this.state.password} onChange={this.handlepasswordChange} />
        </form><br />
        <Button variant="contained" color="secondary"  onClick={this.signin.bind(this)}> Sign In </Button>
        
        </div>
    ):
    ('');

    const users = []
    if(this.state.users.length > 1){
      for(var i=1; i< this.state.users.length; i++){
        users.push(<TableRow key={i}>
        <TableCell> {this.state.users[i][0]} </TableCell>
        <TableCell> {this.state.users[i][1]} </TableCell>
        <TableCell> {this.state.users[i][2]} </TableCell>
        <TableCell> {this.state.users[i][3]} </TableCell>
        <TableCell> {this.state.users[i][4]} </TableCell>
        <TableCell> {this.state.users[i][5]} </TableCell>
        <TableCell> {this.state.users[i][6]} </TableCell>
        <TableCell> {this.state.users[i][7]} </TableCell>
        </TableRow>)
      }
      
    }
    const data = this.state.signedIn ? (
      <div>
        <h5> Signed In </h5>
        <p> These are the users who have submitted the form above. </p>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Fund Type</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {users}
          </TableBody>
          </Table>
        </TableContainer>
      </div>
      )
      : 
      (
        <div>
          <Button variant="contained" color="primary" onClick={this.displayform}> See Users </Button>
          {form}
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