import React, { Component } from 'react';
import './App.css';
import movieService from './movies'
import MovieContainer from './MovieContainer'
import MovieTileLayout from './MovieTileLayout'
import MovieListLayout from './MovieListLayout'
import Header from './Header'

class App extends Component {
  constructor(props){
  	super(props)

  	this.state = {
  		movies : [],
  		layout : 'list'
  	}

  	this.changeLayout = this.changeLayout.bind(this)
  }	


  componentDidMount(){
    this.setState({movies:movieService.movies})
  }


  changeLayout(changedLayout){
  	this.setState({layout:changedLayout})
  }

  render() {
  	let layout = (this.state.layout === 'list') ? MovieListLayout : MovieTileLayout
    return (
      <div className="app-container">
        <Header layout={this.state.layout} changeLayout={this.changeLayout} />
        <div className="movies-list">
    		{this.state.movies.map(movie => {
    			return (
    				<MovieContainer key={movie.imdbID} {...movie} layout={layout} /> 
    			)
    		})}
    	</div>
      </div>
    );
  }
}

export default App;
