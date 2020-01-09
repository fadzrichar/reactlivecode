import React from "react";
import { Redirect } from "react-router-dom";

// Custom Components
import Header from "../Components/header";

import { connect } from "unistore/react";
import { actions } from "../store";

const Profile = props => {
    const login_status = JSON.parse(localStorage.getItem("login_status"));
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const avatar = localStorage.getItem("avatar");
    console.warn("login_status", login_status);
    if (login_status === null) {
        return <Redirect to={{ pathname: "/login"}} />;
    } else {
        return (
            <React.Fragment>
                <Header  {...props} />
                <div className="container" style={{marginTop:"100px"}}>
                <br />
                <br />
                <br />
                <div className="row border">
                    <div className="col-3">
                    <img width="100%" src={avatar} alt="avatar" style={{margin:"10px"}} />
                    </div>
                    <div className="col-9 pt-5">
                    <h3>Name : {username}</h3>
                    <h4>Email : {email}</h4>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
};

// export default Login;
export default connect(
    "name, email, login_status, pasword",
    actions
  )(Profile);