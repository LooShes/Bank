import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        return (
            <div>
                <p>{this.props.amount}</p>
                <p>{this.props.vendor}</p>
                <p>{this.props.category}</p>
                <button id="delete-btn">Delete Transaction</button>
            </div>
        )
    }
}

export default Transaction;