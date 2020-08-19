import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import { Link } from 'react-router-dom';

class MovieRow extends React.Component{

    // När användaren klickar på en filmposter så körs denna funktionen
    viewMovie(){

        // Här är API anropen. Movie ID skickas med och hämtar data för just den filmen som blivit klickad på
        const url = "https://api.themoviedb.org/3/movie/" + this.props.movie.id + "?api_key=bb78e4cf3442e302d928f2c5edcdbee1&append_to_response=credits"
        const url2 = "https://api.themoviedb.org/3/movie/" + this.props.movie.id + "/videos?api_key=bb78e4cf3442e302d928f2c5edcdbee1"

        // Data hämtas med axios. Sparar ner HTML-kod och data från API anropet i variabler som sedan skrivs ut på sidan
        axios.get(url)
            .then((searchResults) => {            

                // Hämtar titeln av filmen och även vilket år som den släpptes
                var title = `      
                    <h1>${searchResults.data.original_title} (${searchResults.data.release_date.substr(0, 4)})</h1>
                `
            
                // Hämtar postern
                var poster = `     
                    <img src="${this.props.movie.poster_src}" height="422px">
                `
                
                // Hämtar information om filmen: Handling, genre och varaktighet
                var info = `
                <br>
                    <p>Summary : ${searchResults.data.overview}</p>
                    <p>Genre : <span>${searchResults.data.genres[0].name}</span></p>
                    <p>Runtime: ${searchResults.data.runtime} min</p>
                `

                // Skriver ut de sparade innehållet på sidan i respektive div id
                $('#title').html(title)
                $('#poster').html(poster)
                $('#info').html(info)
            })


            // Hämtar data med axios
            axios.get(url2)
            .then((searchResults) => {
                console.log(searchResults)

                
                let trailerPath = ""
                if(!searchResults.data.results[0].hasOwnProperty("key")){
                    alert("Cannot find any trailer for your movie")
                }
                else{
                    trailerPath = "https://www.youtube.com/embed/" + searchResults.data.results[0].key
                }

                var trailer = []

                // Hämtar trailer på filmen
                trailer = `
                    <iframe width="60%" height="420" src="${trailerPath}" frameborder="0" allowfullscreen></iframe>
                `
                $('#trailer').html(trailer)
            })
    }

    render(){
        return (<Link to="/trailerPage"><img onClick={this.viewMovie.bind(this)} alt="poster" width="300" src={this.props.movie.poster_src}/></Link>  
        );
    }
}

export default MovieRow