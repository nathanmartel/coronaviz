import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Main from './Main';


export default class App extends Component {
  
  state = {
    data: []
  }

  componentDidMount = async() => {
    const result = await request.get('https://covidtracking.com/api/us/daily');
    console.log(result);
    this.setState({ data: result.text });
  };

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Coronavirus visualizations.
        </p>
      </header>
      <div>
        <Main data={this.state.data} />
      </div>
    </div>
  );

  }
}