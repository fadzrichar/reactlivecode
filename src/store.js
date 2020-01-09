import createStore from "unistore";
import axios from "axios";

// Initiate new store state and export it
const initialState = {
  name: "",
  email: "",
  avatar: "",
  password: "",
  login_status: true,
  listMovies: [],
  paramsCategory: '',
  isLoading: true,
  listMoviesCategory: [],
  hostLogin: "https://api-todofancy.herokuapp.com/api/auth",
  baseUrl: "https://api-todofancy.herokuapp.com/api/movies"
};

export const store = createStore(initialState);

// initiate actions function and export it
export const actions = store => ({

	// Set dynamic category
	setCategory: (state, category) => {
		return {paramsCategory : category}
	},

	// Define movies function for listing movies in moviesCategory pages
	movies : async (state,event) => {
		const self = store;
		await axios
		.get(state.baseUrl)
		.then(function(response) {
		  self.setState({ listMovies: response.data.articles, isLoading: false });
		  // handle success
		  console.log(response.data);
		})
		.catch(function(error) {
		  self.setState({ isLoading: false });
		  // handle error
		  console.log(error);
		});
	}
});
