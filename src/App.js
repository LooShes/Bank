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
    this.setState({ data: transactions.data }, function(){
      console.log(this.state)
    })
  }

  postData = async (transaction) => {
    await axios.post('http://localhost:8000/transaction', transaction)
  }

  deleteFromDB = async(amount) => {
    await axios.delete(`http://localhost:8000/transaction/${amount}`)
  }

  calculateBalance = () => {
    let sum = 0
    for(let data of this.state.data){
      sum += parseInt(data.amount)
    }
    return sum
  }

  deleteTransaction = async(id) => {
    let transactions = [...this.state.data]
    transactions = transactions.filter(t => t._id !== id)
    this.setState({ data: transactions })
    await this.deleteFromDB(id)
}

  insertTransaction = async (transaction) => {
    debugger
    let transactions = [...this.state.data]
    transactions.push(transaction)
    this.setState({ data: transactions })
    await this.postData(transaction)
  }

  divStyle = {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "960px",
    paddingRight: "10px",
    paddingLeft:  "10px",
  }

  render(){
    let balance = this.calculateBalance()
    return(
      <Router>
        <div id="container" style={this.divStyle}>
        <div id="main-links" style={{justifyContent:"center"}}>
            <Link to="/" style={{padding:"10px"}}>Transaction</Link>
            <Link to="/about">Operations</Link>
          </div>
          <Route path="/" exact render={() => <Transactions data={this.state.data} onClick={this.deleteTransaction} />} />
          <Route path="/about" exact render={() => <Operations data={this.state.data} balance={balance} onClick={this.insertTransaction} />} />
      </div>
      </Router>
    )
  }
}

export default App;
