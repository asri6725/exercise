import React from 'react'
/*
class Users extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const data = this.props.users
        return(
            {data}
        )
    }
}
*/

export default function Users(){
       
        if (this.props.fund === "Premium" && (!(10000<this.props.amount) && !(this.props.amount<250000))){
            if((!(10000<this.props.amount))){
                return(
                    <div>
                        <p> The amount to invest for Premium fund needs to be between $10,000 and $250,000 </p>
                        <p>Please check the amount</p>
                </div>
                )
            }
        }
        else if (this.props.fund === "Premium" && ((10000<this.props.amount<250000) && (this.props.amount<250000))){
            
            return(<input type="submit" value="Send" className="Button"/>)
        }
        else if (this.props.fund === "Normal" && !(25000<this.props.amount<250000)  && !(this.props.amount<250000)){
            return(
                <div>
                    <p> The amount to invest for Premium fund needs to be between $25,000 and $250,000 </p>
                    <p>Please check the amount</p>
            </div>
            )
        }
        
        else if (this.props.fund === "Normal" && (25000<this.props.amount<250000) && (this.props.amount<250000)){
            
            return (<input type="submit" value="Send" className="Button"/>)
        }
}