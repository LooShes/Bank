import React, { Component } from 'react';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ] 
    }          
  }

  calculateBalance = () => {
    let sum = 0
    console.log(this.state.data)
    for(let data of this.state.data){
      sum += parseInt(data.amount)
    }
    return sum
  }

  deleteTransaction = amount => {
    console.log(amount)
    let transactions = [...this.state.data]
    transactions = transactions.filter(t => t.amount !== amount)
    this.setState({ data: transactions })
}

  insertTransaction = transaction => {
    let transactions = [...this.state.data]
    transactions.push(transaction)
    this.setState({ data: transactions })
  }

  render(){
    let balance = this.calculateBalance()
    console.log(balance)
    return(
      <Router>
        <div id="container">
          <Transactions data={this.state.data} onClick={this.deleteTransaction} />
          <Operations data={this.state.data} onClick={this.insertTransaction} />
      </div>
      </Router>
    )
  }
}

export default App;
