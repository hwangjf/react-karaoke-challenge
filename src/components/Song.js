import React from 'react';
import KaraokeDisplay from './KaraokeDisplay';

class Song extends React.Component {
  handleClick = () => {
    this.props.handleClick(this.props.song)
  }

  render(){
    let { title, singer, lyrics, plays, likes, dislikes } = this.props.song
    
    return (
    <tr className="song">
      <td>{title}</td>
      <td>{singer}</td>
      <td><button onClick={this.handleClick}>Play</button></td>
    </tr>
    )
  }
}

export default Song;
