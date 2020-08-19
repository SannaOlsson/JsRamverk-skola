import React, { Component } from 'react';
import MovieRow from './MovieRow.js'
import $ from 'jquery' // installerat med npm
import axios from 'axios' // installerat med npm


class TvPage extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.loadMoviesOnHomepage()
  }

  loadMoviesOnHomepage(){
    console.log("Loading movies on homepage ")
    const urlString = "https://api.themoviedb.org/3/tv/on_the_air?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=1"
    const urlString2 = "https://api.themoviedb.org/3/tv/on_the_air?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=2"
    const urlString3 = "https://api.themoviedb.org/3/tv/on_the_air?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=3"
    const urlString4 = "https://api.themoviedb.org/3/tv/on_the_air?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=4"
    const urlString5 = "https://api.themoviedb.org/3/tv/on_the_air?api_key=bb78e4cf3442e302d928f2c5edcdbee1&page=5"

    var movieRows = []

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results

        console.log(searchResults.results)
        console.log(searchResults.results.original_name)
        // console.log(searchResults.results.first_air_date.substr(0, 4))
        console.log(searchResults.results.poster_src)
        console.log(searchResults.results.overview)

        console.log("THIS IS THE ID OF THE TV SHOW: " + searchResults.results.id)



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
        console.log("Fetched data successfully")
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
        console.log("Fetched data successfully")
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
        console.log("Fetched data successfully")
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
        console.log("Fetched data successfully")
        const results = searchResults.results

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
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

  performSearch(searchTerm){
    console.log("Performing search from moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=bb78e4cf3442e302d928f2c5edcdbee1&query=" + searchTerm

    axios.get(urlString)
    .then((response) => {
      let output = ''
      let movies = response.data.results
      $.each(movies, (index, movie) => {
        movie.poster_src = "https://image.tmdb.org/t/p/w300" + movie.poster_path
        output += `
        <a href="#"><img src="${movie.poster_src}"></a>
        `
      })

      $('#movies').html(output)
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render(){
    return (  
      <div className="App">
        <div className ="container">
          <div id="movies" className="row"></div>
          <div id="trailer"></div>
          <div id="movies2"></div>
        </div>
        {this.state.rows}
      </div>
    );
  } 
}

export default TvPage;