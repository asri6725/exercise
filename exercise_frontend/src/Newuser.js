import React from 'react';
class Newuser extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            fund_amount_check : true,
            fund_amount : 0,
            fund : "Premium",
            data: <p> The amount to invest for Premium fund needs to be between $10,000 and $250,000 </p>,
            
        }
        //this.handlefundChange = this.handlefundChange.bind(this);
        //this.handleamountChange = this.handleamountChange.bind(this);
    }
    // handleamountChange(event){
    //     this.setState({fund_amount: event.target.value});
        
    // }
    // handlefundChange(event){
    //     this.setState({fund: event.target.value});
    //     console.log(this.state);
    // }
   
    render(){
        
        
        /*
        if (this.state.fund === "Premium" && (!(10000<this.state.amount) && !(this.state.amount<250000))){
            data = <p> The amount to invest for Premium fund needs to be between $10,000 and $250,000 </p>
            submit = <p>Please check the amount</p>
        }
        else if (this.state.fund === "Premium" && ((10000<this.state.amount<250000) && (this.state.amount<250000))){
            data = ''
            submit =  (<input type="submit" value="Send" className="Button"/>)
        }
        else if (this.state.fund === "Normal" && !(25000<this.state.amount<250000)  && !(this.state.amount<250000)){
            data = <p> The amount to invest for Normal fund needs to be between $10,000 and $250,000 </p>
            submit = <p>Please check the amount</p>
        }
        
        else if (this.state.fund === "Normal" && (25000<this.state.amount<250000) && (this.state.amount<250000)){
            data = ''
            submit =  (<input type="submit" value="Send" className="Button"/>)
        }
        <select name = "InvestmentFund" value={this.state.fund} onChange = {this.handlefundChange}>
         <input type="number" placeholder="amount" name = "amount" value={this.state.amount} onChange={this.handleamountChange}/>
        */
       //const { fund, amount } = this.state;
       //const isEnabled = (fund === 'Premium' && amount > 10000 && amount < 250000) || (fund==="Normal" && amount > 20000 && amount < 250000);

        return(
            <div>
                <h3> Register </h3>
                <form action="/send" method="POST">
                <input type="text" placeholder="First Name" name = "firstname" />
                <input type="text" placeholder="Last Name" name = "lastname" />
                <input type="date" name = "date" />
                <input type="mail" placeholder="email address" name = "email" />
                <input type="number" placeholder="phone number" name = "phone" />
                
                <select name = "InvestmentFund">
                    <option value='Premium'> Premium </option>
                    <option value='Normal'> Normal </option>
                </select>
                <input type="number" placeholder="amount" name = "amount" />
                <button type="submit" value="Send" className="Button"> Send </button>
                </form>
            </div>
        );
    }
}

export default Newuser;