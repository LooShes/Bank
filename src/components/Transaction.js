import React, { Component } from 'react';

class Transaction extends Component {
    deleteTransaction = () => {
        this.props.onClick(this.props.transaction.amount)
    }

    render() {
        //console.log(this.props)
        return(
            <div id="data-container">
                <p>Amount :{this.props.transaction.amount}</p>
                <p>Vendor: {this.props.transaction.vendor}</p>
                <p>Category: {this.props.transaction.category}</p>
                <button id="delete-btn" onClick={this.deleteTransaction}>Delete Transaction</button>
            </div> 
            )
       }
}

export default Transaction;