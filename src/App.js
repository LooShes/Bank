import React, { Component } from 'react';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [] 
    }          
  }

  componentDidMount = async () =>{
    await this.getData()
  }

  getData = async () =>{
    let transactions = await axios.get("http://localhost:8000/transactions")
    this.setState({ data: transactions.data })
  }

  postData = async () => {
    console.log(this.state.data[this.state.data.length-1])
    await axios.post('http://localhost:8000/transaction', this.state.data[this.state.data.length-1])
  }

  deleteFromDB = async() => {
    
  }

  calculateBalance = () => {
    let sum = 0
    for(let data of this.state.data){
      sum += parseInt(data.amount)
    }
    return sum
  }

  deleteTransaction = amount => {
    let transactions = [...this.state.data]
    transactions = transactions.filter(t => t.amount !== amount)
    this.setState({ data: transactions })
}

  insertTransaction = async (transaction) => {
    let transactions = await [...this.state.data]
    transactions.push(transaction)
    this.setState({ data: transactions })
    console.log(this.state.data)
    await this.postData()
  }

  render(){
    let balance = this.calculateBalance()
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
