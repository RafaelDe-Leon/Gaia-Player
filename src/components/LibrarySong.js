import React from 'react';
import { playAudio } from '../utils';

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  id,
  isPlaying,
  setSongs,
}) => {
  const songSelectHanlder = () => {
    setCurrentSong(song);
    // Add Active State

    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    // check if the audio is isPlaying
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHanlder}
      className={`library-song ${song.active ? 'selected' : ''}`}>
      <img src={song.cover} alt='album cover on a song'></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
