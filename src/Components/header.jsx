import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import "../style/bootstrap.min.css";

class Header extends Component {
    postLogout = () => {
        localStorage.removeItem("login_status");
        this.props.history.push("/");
    };

	render() {
	  return (
		<div>
			<header className="header border-bottom fixed-top">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-2 header-logo">
							<ul className="header-title list-unstyled">
                                <li>
                                    <img src={require("../Image/logoreact.png")} style={{height: "50px"}}alt="logoreact"></img>
                                </li>
                                <li>
                                    <Link to="/">Movie</Link>
                                </li>
                            </ul>
						</div>
                        
                        <div className="col-md-6 justify-content-between">
                            <ul className="header-nav-bar list-unstyled">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li className="menu">
                                    {localStorage.login_status == null ? <link></link> :
                                    <Link onClick={this.postLogout}>Logout</Link>
                                    }
                                </li>
                            </ul>
                        </div>
					</div>
                </div>
			</header>
		</div>
	  );
	}
  }
  
export default Header;