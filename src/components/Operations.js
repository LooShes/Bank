import React, { Component } from 'react';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            transaction: {
                amount = "", 
                vendor = "", 
                category = ""
            }
          }
        this.handleChange = this.handleChange.bind(this)
    }

    deposit = () => {
        this.setState({
            transactions: [...this.state.transactions, this.state.transaction]
          })
    }

    // withdraw = () => {
    //     this.setState({
    //         transactions: [...this.state.transactions, this.state.transaction]
    //       })
    // }

    handleChange (evt, field) {
        this.transaction.setState({ [field]: evt.target.value })
    }

    render() {
        return (
            <div>
                <input id="amount-input" type="text" value={this.state.transaction.amount} onChange={(event)=>this.handleChange(event, "amount")}></input>
                <input id="vendor-input" type="text" value={this.state.transaction.vendor} onChange={(event)=>this.handleChange(event, "vendor")}></input>
                <input id="category-input" type="text" value={this.state.transaction.category} onChange={(event)=>this.handleChange(event, "category")}></input>
                <button id="deposit-btn" onClick={this.deposit}>Deposit</button>
                <button id="withdraw-btn" onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}

export default Operations;