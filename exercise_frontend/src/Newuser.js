import React from 'react';
import axios from 'axios';

import { Button, TextField, Select, MenuItem, CircularProgress } from '@material-ui/core/';

class Newuser extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            fund_amount_check : false,
            InvestmentFund : "Premium",
            sent: false,
            firstname : "", 
            lastname : "",
            date : "",
            email : "",
            phone : 0,
            amount : 0,
            error: "",
            isloading: false
        }
        this.handlefundChange = this.handlefundChange.bind(this);
        this.handleamountChange = this.handleamountChange.bind(this);
    }
    handleamountChange(event){
        this.setState({amount: event.target.value});
        if(this.state.InvestmentFund === 'Premium'){
          if(this.state.amount < 1000){
            this.setState({fund_amount_check: false})
          }
          else if(this.state.amount >= 1000 && this.state.amount <250000){
            this.setState({fund_amount_check: true})
          }
          else if(this.state.fund_amount>=250000){
            this.setState({fund_amount_check: false})
          }
        }
        else if(this.state.InvestmentFund=== 'Normal'){
          if(this.state.amount < 2500){
            this.setState({fund_amount_check: false})
          }
          else if(this.state.amount >= 2500 && this.state.amount <250000){
            this.setState({fund_amount_check: true})
          }
          else if(this.state.amount>=250000){
            this.setState({fund_amount_check: false})
          }
        }
        
    }
    handlefundChange(event){
        this.setState({InvestmentFund: event.target.value});
    }
    
    generalChangeHandler = (e) => {
      this.setState({[e.target.name]:e.target.value})
    }

    send = async () => {
      console.log("posting")
      this.setState({isloading: true})
      await axios.post('/send', {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        date: this.state.date,
        email: this.state.email,
        phone: this.state.phone,
        InvestmentFund: this.state.InvestmentFund,
        amount: this.state.amount,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>{
        console.log(response.data)
        if(response.data === 200 || response.data === "200"){
          this.setState({sent:true, isloading:false})
        }
        else{
          this.setState({error: <div><p>{response.data}<br />If the issue persists, contact me at abhinandan.srinivas@gmail.com </p></div>, isloading:false})
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({error:<div><p>Looks like there is an error, please try again after refreshing.<br /> If the issue persists, contact me at abhinandan.srinivas@gmail.com</p> </div>,isloading:false})
      })
    }
  
    render(){
      const { firstname, lastname, date, email, phone } = this.state
      
      //Based on the Investment type selected, this informs users about the minimum and maximum amounts.
      const amount_checker = this.state.InvestmentFund=== 'Normal'?
            <p> The amount to invest for Normal fund needs to be between $25,000 and $250,000 </p>
        :
            <p> The amount to invest for Premium fund needs to be between $10,000 and $250,000 </p>
        
      
      // Display form, if form is sent and is awaiting server response, display a loading animation.
      const form_display = this.state.isloading ? <div style={{'margin':'25%'}}><CircularProgress color="primary" /> </div>: (
        <div>
          <h3> Register </h3>
          {this.state.error}
        <form>
        <TextField required  label="First Name" name = "firstname" value = {firstname} onChange={this.generalChangeHandler} /> <br />
        <TextField required  label="Last Name"name = "lastname" value={lastname} onChange={this.generalChangeHandler} /> <br /><br />
        <TextField required  label="Date"  InputLabelProps={{ shrink: true, }} type="date" name = "date" value={date} onChange={this.generalChangeHandler} /> <br />
        <TextField required  label="Email Address" type="mail" name = "email" value = {email}  onChange={this.generalChangeHandler} /><br /><br />
        <TextField required  label="Phone Number" type="number" name = "phone" value={phone} onChange={this.generalChangeHandler}  /><br />
        <p>Investment Type</p><Select 
                  label="Investment Type"
                  name = "InvestmentFund"
                  value={this.state.fund} 
                  onChange = {this.handlefundChange}
                  defaultValue = "Premium"
                >
                  <MenuItem value="Premium">Premium</MenuItem>
                  <MenuItem value="Normal">Normal</MenuItem>
                </Select> <br /><br />

        <TextField required  label="Amount" type="number" placeholder="amount" name = "amount" value={this.state.amount} onChange={this.handleamountChange}  /><br /><br />
        
        </form>
        <Button variant="contained" color="secondary"  onClick = {this.send.bind(this)}  disabled={!this.state.fund_amount_check}  > Send </Button>
        {amount_checker}
        </div>
        )

        // Once the server returns data, sent is true and user is given confirmation.
        const render_return = this.state.sent ?
        <div>
          <h3> All Done! </h3>
          <p> Your response is recorded. <br /> Please check the confirmation sent to your mail.<br /> Thank you! </p>
        </div>
        :
        (
          <div>
                {form_display} 
            </div>
        )

        return(
          <div>
          {render_return}  
          </div>
        );
    }
}

export default Newuser;