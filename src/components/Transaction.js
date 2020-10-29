import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class Transaction extends Component {
      divStyle = {
        padding: "5px",
        paddingBottom: "15px",
        fontSize: "19px",
      }

      pStyle = {
        fontSize: "15px",
      }

    deleteTransaction = () => {
        this.props.onClick(this.props.transaction._id)
    }

    render() {
        return(
            <h2 id="data-container" style={this.divStyle}>Transaction:
                <p style={this.pStyle}>Amount :{this.props.transaction.amount}</p>
                <p style={this.pStyle}>Vendor: {this.props.transaction.vendor}</p>
                <p style={this.pStyle}>Category: {this.props.transaction.category}</p>
                <Button aria-label="delete" onClick={this.deleteTransaction} variant="contained" color="secondary"startIcon={<DeleteIcon />}>Delete</Button>
            </h2> 
            )
       }
}

export default Transaction;