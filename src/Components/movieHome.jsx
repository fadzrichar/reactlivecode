import React from "react";
import { Link } from "react-router-dom";

function MovieHome(props) {
  const movieRouter = categoryName => {
    const category = categoryName;
    this.props.history.replace("/movies-category/" + category);
  };

  return (
    <div className="col-2">
      <div className="row">
        <div className="col-12 text-center">
          <h2>{props.data.Title}</h2>
        </div>
        <div className="col-12 border img px-0">
          <img width="100%" height="277.62" src={props.data.Poster} alt="" />
        </div>

        <div className="col-12 text-center">
          <br />
          <Link to={props.data.Category}>
            <button className="btn btn-primary">See Movies</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieHome;
