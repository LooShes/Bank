import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
    render() {
        return (
            <div>
                {this.props.dummyData.forEach(e => {
                    return <Transaction data={e} />
                })}
            </div>
        );
    }
}

export default Transactions;