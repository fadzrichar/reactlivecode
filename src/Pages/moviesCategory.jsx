import React from "react";

import { connect } from "unistore/react";
import { actions } from "../store";

// import component
import Header from "../Components/header";
import MovieDetail from "../Components/movieDetail";

class MoviesCategory extends React.Component {
    handleRouterCategoryMovies = async categoryName => {
		const category = categoryName;
		await this.props.history.replace("/movies-category/" + category);
		await this.props.setCategory(this.props.match.params.category);
		console.log(this.props.paramsCategory)
		this.props.moviesCategory()
	}
    
    componentDidMount() {
        this.props.moviesCategory()
    }

    render() {
    return (
      <div>
        <Header />
        <div className="container">
          <br />
          <div className="row justify-content-center mt-2">
            <div className="col-12">
              <MovieDetail data={this.props.listMoviesCategory} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default MoviesByCategory;
export default connect(
  "listMovies, listMoviesCategory, baseUrl, paramsCategory",
  actions
)(MoviesCategory);
