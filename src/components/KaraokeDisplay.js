import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  if (props.song) {
    return (
      <div className="karaoke-display">
        <h2>{props.song.title}</h2>
        <Lyrics lyrics={props.song.lyrics} />
      </div>
    )
  } else {
    return (
      <div className="karaoke-display">
        <h2>Song Title</h2>
        <Lyrics lyrics="example song lyrics" />
      </div>
    )
  }
}

export default KaraokeDisplay;
