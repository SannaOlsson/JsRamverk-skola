import React, { Component } from 'react';
import MovieRow from './MovieRow.js'
import $ from 'jquery' // installerat med npm

class NowPlaying extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.loadMoviesOnHomepage()
  }

  loadMoviesOnHomepage(){
    console.log("Loading movies on homepage ")

    // Alla API anrop som görs
    const urlString = "https://api.themoviedb.org/3/movie/now_playing?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=1"
    const urlString2 = "https://api.themoviedb.org/3/movie/now_playing?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=2"
    const urlString3 = "https://api.themoviedb.org/3/movie/now_playing?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=3"
    const urlString4 = "https://api.themoviedb.org/3/movie/now_playing?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=4"
    const urlString5 = "https://api.themoviedb.org/3/movie/now_playing?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=5"

    var movieRows = []

    // Data hämtas med ajax
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results

        // För varje film i resultatet så skapar vi en MovieRow och visar postern. Dessa läggs sedan till i movieRow arrayen
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })

    $.ajax({
      url: urlString2,
      success: (searchResults) => {
        const results = searchResults.results

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })

    $.ajax({
      url: urlString3,
      success: (searchResults) => {
        const results = searchResults.results

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })

    $.ajax({
      url: urlString4,
      success: (searchResults) => {
        const results = searchResults.results

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })

    $.ajax({
      url: urlString5,
      success: (searchResults) => {
        const results = searchResults.results

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        // Sätter this.state.rows till alla filmer som sparats ner
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })
  }

  render(){
    return (  
      <div className="App">
        <div className ="container">
          <div id="movies" className="row"></div>
          <div id="trailer"></div>
          <div id="movies2"></div>
        </div>

        {/* Här skriver vi ut alla filmer som sparats */}
        {this.state.rows}
      </div>
    );
  } 
}

export default NowPlaying;