import React, { Component } from "react";

// Import STORE RESOURCES
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

// Custom Components
import Header from "../Components/header";
import MovieHome from "../Components/movieHome"

class Home extends Component {
	render() {		
	return (
		<div>
			<Header />
			<div className="body-home" style={{marginTop:"100px"}}>
				<div className="container">
				<br />
				<br />
				<br />
				<div className="row justify-content-center ">
					<MovieHome
					data={{
						Title: "Romance",
						Poster:
						"https://upload.wikimedia.org/wikipedia/en/a/aa/You_Are_the_Apple_of_My_Eye_film_poster.jpg",
						Category: "romance"
					}}
					/>
					<MovieHome
					data={{
						Title: "Action",
						Poster:
						"https://i.pinimg.com/564x/81/60/a0/8160a033be6f0911a584a5a1ed99903e.jpg",
						Category: "action"
					}}
					/>
					<MovieHome
					data={{
						Title: "Fiction",
						Poster:
						"https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
						Category: "fiction"
					}}
					/>
					<MovieHome
					data={{
						Title: "Comedy",
						Poster:
						"https://m.media-amazon.com/images/M/MV5BMDFlZDhjMDctODI4Yy00NjZkLWJkNWYtNGExNWVkZDA1MGNiL2ltYWdlXkEyXkFqcGdeQXVyMzUwMTk4OTI@._V1_UY1200_CR165,0,630,1200_AL_.jpg",
						Category: "comedy"
					}}
					/>
				</div>
				</div>
			</div>
		</div>
	  );
	}
}

export default connect(
	"listTopNews, listEverything, isLoading, apiKey, baseUrl",
	actions
)(withRouter(Home));