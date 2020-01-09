import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/home";
import Login from "../Pages/logIn";
import Profile from "../Pages/profile";
import MoviesCategory from "../Pages/moviesCategory";
import NotFound from "../Pages/notFound";

const MainRoute = () => {
	return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/profile" component={Profile} />
				<Route path="/movies-category/:category" component={MoviesCategory} />
				<Route component={NotFound} />
			</Switch>
	)
}

export default MainRoute;