import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const getChampions = async ()  => {
      const championsRequest = await axios.get('http://ddragon.leagueoflegends.com/cdn/11.6.1/data/es_MX/champion.json');
      const keys = Object.keys(championsRequest.data.data);
      const newArrayChampions = {}
      keys.forEach((item)=> {
        newArrayChampions[item.toLowerCase()] = championsRequest.data.data[item]
      })
      this.setState({...newArrayChampions})
    }
    getChampions()
  }

  render(){
    return (
      <div className="App">
        <Routes champions={this.state} />
      </div>
    );
  }
}

export default App;
