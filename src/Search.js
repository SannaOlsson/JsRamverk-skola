import React, { Component } from 'react';
import MovieRow from './MovieRow.js'
import $ from 'jquery' // installerat med npm

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
  
    performSearch(searchTerm){
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=bb78e4cf3442e302d928f2c5edcdbee1&query=" + searchTerm

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event){
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  
    render() {
      return (
        <div> 
            <input type="text" style={{
                clear: 'both'
            }} onChange={this.searchChangeHandler.bind(this)} />
            {this.state.rows}
        </div>
      );
    }
  }

  export default Search
