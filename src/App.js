import React, { Component, useRef, useEffect, useState } from 'react';
import request from 'superagent';
import './App.css';
import Main from './Main';
import { select, line } from 'd3';

function App() {
  
  // state = {
  //   data: []
  // }

  
  // componentDidMount = async() => {
  //   const result = await request.get('https://covidtracking.com/api/us/daily');
  //   console.log(result);
  //   this.setState({ data: result.text });
  // };

  const [tempData, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y(value => 150 - value);

    svg
      .selectAll('path')
      .data([tempData])
      .join('path')
      .attr('d', value => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [tempData]);

  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <p>
          Coronavirus visualizations.
        </p>
      </header>
      <div>
        {/* <Main data={this.state.data} /> */}

      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(tempData.map(value => value + 5))}>Update Data</button>
      <button onClick={() => setData(tempData.filter(value => value < 35))}>Filter Data</button>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;