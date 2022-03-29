import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import Banner from './Banner';
import Signin from './Signin';
import TvShows from './TvShows';
import Movies from './Movies';
import Slider from './Slider';
import Footer from './Footer';
import Register from './Register';
import Contact from './Contact';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: ""
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const response = await axios.get("http://localhost:3000/movies");
    this.setState({ movies: response.data })
  }

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3000/movies/${movie.id}`)
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );
    this.setState({
      movies: newMovieList
    })
  }

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3000/movies/`, movie)
    this.setState(state => ({
      movies: state.movies.concat([movie])
    }))

    this.getMovies();
  }

  editMovie = async (id, updateMovie) => {
    await axios.put(`http://localhost:3000/movies/${id}`, updateMovie)
    this.getMovies();
  }

  render() {



    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
    })

    return (
      <Router>
        <div className="container">

          <Switch>
            <Route path="" render={() => (
              <React.Fragment>

                <Route path="/">
                  <div className="row">
                    <div className="col-lg-12">
                      <Banner />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>

                </Route>

                <Route path="/" exact>
                  <Slider />
                  {<hr />}
                </Route>

                <Route path="/" exact>
                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </Route>

                <Route path="/add" render={({ history }) => (
                  <AddMovie
                    onAddMovie={(movie) => {
                      this.addMovie(movie)
                      history.push("/")
                    }
                    }
                  />
                )}>
                </Route>

                <Route path="/edit/:id" render={(props) => (
                  <EditMovie
                    {...props}
                    onEditMovie={(id, movie) => {
                      this.editMovie(id, movie)
                    }
                    }
                  />
                )}>
                </Route>

                <Route path="/signin" exact>
                  <Signin />
                </Route>

                <Route path="/register" exact>
                  <Register />
                </Route>

                <Route path="/movies" exact>
                  <Movies
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie} />
                </Route>

                <Route path="/tvshows" exact>
                  <TvShows
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie} />
                </Route>

                <Route path="/contact" exact>
                  <Contact />
                </Route>

              </React.Fragment>
            )}>
            </Route>
          </Switch>

          <div>

            <Footer />

          </div>

        </div>
      </Router>
    )
  }
}
export default App;