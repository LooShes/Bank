import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "", 
            vendor: "", 
            category: ""
            
          }
        this.handleChange = this.handleChange.bind(this)
        this.handleButtons = this.handleButtons.bind(this)
    }

    inputStyle = {
        width: "200px",
        height: "25px",
    }

    divStyle = {
        paddingBottom: "20px",
        fontSize: "25px",
        color: "blue"
      }

    handleButtons = (evt) => {
        let amount = this.state.amount
        let value = evt.target.value
        amount = (value === "deposit") ? amount : amount*-1
        this.setState({ amount }, function(){
            this.props.onClick(this.state)
            this.setState({
                amount:'', vendor:'', category:''
              })
        })
    }

    handleChange (evt, field) {
        this.setState({ [field]: evt.target.value })
    }

    render() {
        return (
            <div id="operations" style={this.divStyle}>
                <p style={{color:"#00b906", fontWeight:"bold"}}>Current Balance: {this.props.balance}</p>
                Operations: <br></br>
                <input id="amount-input" type="text" value={this.state.amount} onChange={(event)=>this.handleChange(event, "amount")} placeholder="amount" style={this.inputStyle} />
                <input id="vendor-input" type="text" value={this.state.vendor} onChange={(event)=>this.handleChange(event, "vendor")} placeholder="vendor" style={this.inputStyle} />
                <input id="category-input" type="text" value={this.state.category} onChange={(event)=>this.handleChange(event, "category")} placeholder="category" style={this.inputStyle} /><br></br>
                <Button id="deposit-btn" variant="contained" color="primary" value="deposit" onClick={this.handleButtons}>Deposit</Button>
                <Button id="withdraw-btn" variant="contained" color="secondary" value="withdraw" onClick={this.handleButtons} style={{margin:"10px"}}>Withdraw</Button>
            </div>
        )
    }
}

export default Operations;