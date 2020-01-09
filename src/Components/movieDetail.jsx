import React from "react";

// function from data that I get from postman result
function MovieDetail(props) {
  return (
    <div>
      {props.data.map(value => {
        return (
          <div className="row">
            <div className="col-2">
              <img width="100%" src={value.Poster} alt="" />
            </div>
            <div className="col-10">
              <h3>{value.Title}</h3>
              <h4>{value.Year}</h4>
              <p>{value.Synopsis}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieDetail;
