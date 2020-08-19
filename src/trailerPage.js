import React, { Component } from 'react';
import './trailerPage.css'

class TrailerPage extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (  
      <div className="App">
        <div className ="container">
          <div id="title"></div>
          <div id="movie">
            <div id="poster"></div>
            <div id="trailer"></div>
          </div>
          <div id="info"></div>
        </div>
        {this.state.rows}
      </div>
    );
  } 
}
export default TrailerPage;