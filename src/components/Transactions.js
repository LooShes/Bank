import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
   
    render() {
        return (
            this.props.data.map(t => {
               return <Transaction transaction={t} onClick={this.props.onClick} />          
            })
        )
    }
}

export default Transactions;