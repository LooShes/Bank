import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
    render() {
        return (
            <div>
                {this.props.dummyData.forEach(t => {
                    return <Transaction data={t} />
                })}
            </div>
        );
    }
}

export default Transactions;