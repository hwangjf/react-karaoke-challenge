import React from 'react';
import Song from './Song';

const SongList = (props) => {
  
  const mapSongs = () => {
    return props.songs.map(song => {
      return (
        <Song song={song} handleClick={props.handleClick} />
      )
    })
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {mapSongs()}
        
      </tbody>
    </table>
  )
}

export default SongList;
