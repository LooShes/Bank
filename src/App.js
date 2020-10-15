import React, { Component } from 'react';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      dummyData: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ] 
    }          
  }

  calculateBalance = () => {
    let sum = 0
    for(let data of this.state.dummyData){
      sum += data.amount
    }
    return sum
  }

  render(){
    let balance = this.calculateBalance()
    console.log(balance)
    return(
      <Transactions data={this.state} />
    )
  }
}

export default App;
