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
    }

    deposit = () => {
        console.log(this.props.insertTransaction)
        
    }

    withdraw = () => {
        this.setState({amount: -this.state.amount})
        this.setState({
            transactions: [...this.state.transactions, this.state.transaction]
          })
    }

    handleChange (evt, field) {
        this.setState({ [field]: evt.target.value })
    }

    render() {
        return (
            <div id="operations">
                <input id="amount-input" type="text" value={this.state.amount} onChange={(event)=>this.handleChange(event, "amount")} placeholder="amount"/>
                <input id="vendor-input" type="text" value={this.state.vendor} onChange={(event)=>this.handleChange(event, "vendor")} placeholder="vendor"/>
                <input id="category-input" type="text" value={this.state.category} onChange={(event)=>this.handleChange(event, "category")} placeholder="category"/>
                <button id="deposit-btn" onClick={this.deposit}>Deposit</button>
                <button id="withdraw-btn" onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}

export default Operations;