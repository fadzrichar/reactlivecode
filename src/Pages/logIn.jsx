import React from "react";
import axios from "axios";
import Header from "../Components/header";
import { connect } from "unistore/react";
import { actions } from "../store";

class Login extends React.Component {
  updateInput = e => {
		this.setState({ [e.target.name]: e.target.value});
		console.warn("check target", e.target.value);
  };
  postLogin = () => {
		const data = {
			username: this.props.name,
			password: this.props.password
		};
		const self = this;
		axios
			.post(this.props.hostLogin, data)
			.then(async function(response) {
				console.log(response.data);
        await localStorage.setItem("username", response.data.user_data.username);
        localStorage.setItem("login_status", true);
        localStorage.setItem("email", response.data.user_data.email);
        localStorage.setItem("avatar", response.data.user_data.avatar);
        self.props.history.push("/profile");
			})
			.catch(function (error) {
				console.log(error);
			});
  };

  render() {
		console.warn("check state", this.state);
		return (
		<React.Fragment>
			<Header {...this.props}/>
      <div className="container" style={{marginTop:"100px"}}>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-5 border">
            <div className="row justify-content-center">
              <img src={require("../Image/logoreact.png")} style={{height: "50px", marginTop:"20px"}}alt="logoreact"></img>
            </div>
            <div className="row justify-content-center">
              <span>MOVIES</span>
            </div>
            <div className="row justify-content-center">
              <div className="row justify-content-center" style={{marginTop:"10px"}}>
                <nav className="col-12 navbar navbar-light">
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Username"
                        onChange={e => this.updateInput(e)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={e => this.updateInput(e)}
                      />
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary" onClick={() => this.postLogin()}>
                        Sign In
                      </button>
                    </div>
                  </form>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
		</React.Fragment>
		)
	}
}

// export default Login;
export default connect(
  "name, email, login_status, pasword, hostLogin",
  actions
)(Login);
