import React, { Component } from 'react';

class Transaction extends Component {
    buttonStyle = {
        color: 'blue',
      }

      divStyle = {
        padding: "5px",
        paddingBottom: "15px",
        fontSize: "25px",
      }

      pStyle = {
        fontSize: "15px",
      }

    deleteTransaction = () => {
        this.props.onClick(this.props.transaction._id)
    }

    render() {
        return(
            <div id="data-container" style={this.divStyle}>Transaction:
                <p style={this.pStyle}>Amount :{this.props.transaction.amount}</p>
                <p style={this.pStyle}>Vendor: {this.props.transaction.vendor}</p>
                <p style={this.pStyle}>Category: {this.props.transaction.category}</p>
                <button id="delete-btn" onClick={this.deleteTransaction} style={this.buttonStyle}>Delete Transaction</button>
            </div> 
            )
       }
}

export default Transaction;