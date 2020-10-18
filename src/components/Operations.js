import React, { Component } from 'react';

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

    handleButtons = (evt) => {
        let amount = this.state.amount
        console.log(evt.target)
        let { name } = evt.target.name
        amount = name === "deposit" ? amount : amount*-1
        this.setState({ amount }, function(){
            this.props.onClick(this.state)
        })
    }

    handleChange (evt, field) {
        this.setState({ [field]: evt.target.value })
    }

    render() {
        return (
            <div id="operations">Operations: <br></br>
                <input id="amount-input" type="text" value={this.state.amount} onChange={(event)=>this.handleChange(event, "amount")} placeholder="amount"/>
                <input id="vendor-input" type="text" value={this.state.vendor} onChange={(event)=>this.handleChange(event, "vendor")} placeholder="vendor"/>
                <input id="category-input" type="text" value={this.state.category} onChange={(event)=>this.handleChange(event, "category")} placeholder="category"/>
                <button id="deposit-btn" name="deposit" onClick={this.handleButtons}>Deposit</button>
                <button id="withdraw-btn" name="withdraw" onClick={this.handleButtons}>Withdraw</button>
            </div>
        )
    }
}

export default Operations;