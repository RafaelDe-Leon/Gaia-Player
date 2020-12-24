import React from 'react';

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  id,
  isPlaying,
  setSongs,
}) => {
  const songSelectHanlder = async () => {
    await setCurrentSong(song);
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
    if (isPlaying) audioRef.current.play();
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
