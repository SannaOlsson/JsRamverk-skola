import React from 'react'
import $ from 'jquery'

class TvRow extends React.Component{
    viewTv(){


    }

    render(){
        return <img onClick={this.viewTv.bind(this)} alt="poster" width="300" src={this.props.tv.poster_src}/>
    }
}

export default TvRow