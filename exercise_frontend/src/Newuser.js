import React from 'react';
import axios from 'axios';

import { Button, TextField, Select, MenuItem } from '@material-ui/core/';

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
      let response = await axios.post('/send', {
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
      })
      .catch(error => {
        console.log(error)
      })

      console.log(response)
      this.setState({sent:true})
      
    }
  
    render(){
      const { firstname, lastname, date, email, phone } = this.state
        const data = this.state.InvestmentFund=== 'Normal'?
            <p> The amount to invest for Normal fund needs to be between $25,000 and $250,000 </p>
        :
            <p> The amount to invest for Premium fund needs to be between $10,000 and $250,000 </p>
        
        const render_return = this.state.sent ?
        <div>
          <h3> All Done! </h3>
          <p> Your response is recorded. <br /> Please check the confirmation sent to your mail.<br /> Thank you! </p>
        </div>
        :
        (
          <div>
                <h3> Register </h3>
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
                <Button variant="contained" color="Secondary"  onClick = {this.send.bind(this)}  disabled={!this.state.fund_amount_check}  > Send </Button>
                
                {data}
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