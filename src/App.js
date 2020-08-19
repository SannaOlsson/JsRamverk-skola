import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom' // installerat med npm
import MoviePage from './MoviePage'
import Navigation from './Navigation'
import Home from './Home.js'
import TvPage from './TvPage'
import TrailerPage from './trailerPage'
import Search from './Search'
import NowPlaying from './NowPlaying'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">

          {/* Navigation är menyn */}
          <Navigation />

          {/* Av-kommentera denna för sökfunktion */}
          {/* <Search/> */}

          {/* Här är alla sidor i routingen */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/moviepage" component={MoviePage} />
            <Route path="/tvpage" component={TvPage} />
            <Route path="/trailerPage" component={TrailerPage} />
            <Route path="/search" component={Search} />
            <Route path="/nowplaying" component={NowPlaying} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  } 
}
export default App