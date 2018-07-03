import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    selected: null,
    value: ""
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/9/songs').then(r=>r.json()).then(data=>this.setState({songs:data}))
  }

  handleClick = (song) => {
    this.setState({selected:song})
  }

  handleChange = (value) => {
    let songs = [...this.state.songs].filter(song => {
      song.title.toUpperCase().include(value.toUpperCase())
    })
    console.log(songs)
    this.setState({value:value,selected:songs})
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter value={this.state.value} handleChange={this.handleChange} />
          <SongList handleClick={this.handleClick} songs={this.state.songs} />
        </div>
        <KaraokeDisplay song={this.state.selected}/>
      </div>
    );
  }
}

export default KaraokeContainer;
