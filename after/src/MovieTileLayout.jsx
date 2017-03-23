import React from 'react'

class MovieTileLayout extends React.Component{
	static propTypes = {Poster:React.PropTypes.string}
	render(){
		const img = this.props.Poster ? `statics/img/${this.props.Poster}` : 'statics/img/placeholder.png'
		return (
			<div className="movie-tile">
				<div className="movie-tile__img-container">
					<div className="movie-tile__img" style={{backgroundImage: `url(${img})`}} />
				</div>
				<div className="movie-tile_info">
					<h1 className="movie-tile__title">{this.props.Title}</h1>
					<h2 className="movie-tile__year">{this.props.Year}</h2>
				</div>
			</div>
		)
	}
}

export default MovieTileLayout