import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eatenIds: [],
    range: [0,4],
    money: 100
  }

  moreOnClick = e => {
    if (this.state.range[1] == 100){
      this.setState({range: [0,4]})
    } else {
      this.setState(prevState => ({prevState, range: [prevState.range[0]+4, prevState.range[1]+4]}))
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} range={this.state.range} onClick={this.moreOnClick} addToEatenArray={this.addToEatenArray} eatenIds={this.state.eatenIds}/>
        <Table eatenIds={this.state.eatenIds} money={this.state.money}/>
      </div>
    );
  }

  addToEatenArray = id => {
    const uneatenSushis = this.state.sushis.filter(sushi => !this.state.eatenIds.includes(sushi.id))
    const uneatenSelected = uneatenSushis.find(sushi => sushi.id === id)
    if (uneatenSelected){
      const cost = parseInt(uneatenSelected.price)
      if (this.state.money - cost >= 0){
        this.setState(prevState=> ({prevState, eatenIds: [...prevState.eatenIds, id]}), ()=>console.log(this.state))
        this.setState(prevState => ({money: prevState.money - cost}), () => console.log(this.state))
     }
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(sushis => {
      console.log(sushis)
      this.setState({sushis}, ()=>console.log(this.state))
    }
  )}
}

export default App;