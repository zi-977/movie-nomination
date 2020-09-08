import React from 'react';
import MovieList from './MovieList';
import NominationList from './NominationList'
import SearchBox from '../components/SearchBox';
import Alert from '../components/Alert';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      nominated: [],
      searchfield: ''
    }
    this.nominatehandler = this.nominatehandler.bind(this)
    this.removehandler = this.removehandler.bind(this)
  };
  
  nominatehandler(event) {
    if (this.state.nominated.length < 5 ) {
      const movieObject = {
        title: event.target.getAttribute('title'),
        year: event.target.getAttribute('year'),
        id: event.target.getAttribute('id')
      }
      this.setState({
        nominated:[...this.state.nominated, movieObject]
      })
    }
  }

  removehandler(event) {
    this.setState({
      nominated: this.state.nominated.filter((nomination) => {
        return nomination.id !== event.target.id
      })
    });
  }

  handleSearch = (event) => {
    let search = event.target.value;
    fetch(`http://www.omdbapi.com/?s=${event.target.value}&apikey=97f52dba`)
      .then(response => response.json())
      .then(results => {
        if (search) { 
          search = ` for "${search}"`
          this.setState({movies: results, searchfield: search})
        } else {
          this.setState({movies: [], searchfield: search})
        }      
      });
  }

  render () {
      return (
        <React.Fragment>
          <div className='container'>
            <div className="shoppies">
              The Shoppies
            </div>
            <div className="grid-item search">
              Movie title
              <SearchBox searchChange={this.handleSearch}/>
            </div>
            <div className="grid-item results">
              <p className='title'>Results {this.state.searchfield}</p>
              <MovieList propMovies={this.state.movies} nominatehandler={this.nominatehandler} nominatedList={this.state.nominated}/>
            </div>
            <div className="grid-item nominations">
              <p className='title'>Nominations</p>
              <NominationList nominatedList={this.state.nominated} removehandler={this.removehandler}/>
            </div>
          </div>
          <Alert nominatedList={this.state.nominated}/>
        </React.Fragment>          
      );
  }
}

export default App;