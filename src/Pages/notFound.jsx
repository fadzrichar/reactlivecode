
import React from "react";
import Header from "../Components/header";

const NotFound = props => {
  const pathname = window.location.pathname;

  return (
    <div>
      <Header {...props} />
      <div className="container profile align-content-center" style={{marginTop:"100px"}}>
        <h4>Page Not found</h4>
        <p>
          Sorry, your search url: <b>{pathname}</b> that is not available for now, thanks.
        </p>
      </div>
    </div>
  );
};

export default NotFound;