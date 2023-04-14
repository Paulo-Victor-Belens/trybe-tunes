import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from './Input';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    isLoading: false,
    inputFavorite: false,
  };

  componentDidMount() {
    this.fecthRequisitionFavorites();
    // this.verifyFavorites();
  }

  // componentDidUpdate() {
  //   this.fecthRequisitionFavorites();
  // }

  // verifyFavorites = async () => {
  //   const { salveFavoriteSongs, albumMusic } = this.props;
  //   const { trackId } = albumMusic;
  //   const resultFavorites = await salveFavoriteSongs;
  //   console.log(resultFavorites);
  //   const test = resultFavorites.some((songs) => songs.trackId === trackId);
  //   console.log(test);
  //   this.setState({
  //     inputFavorite: test,
  //   });
  // };

  onInputChange = ({ target: { name, value, type, checked } }) => {
    const value2 = type === 'checkbox' ? checked : value;
    this.setState(
      {
        [name]: value2,
      },
    );
  };

  fecthRequisitionFavorites = async (albumMusic) => {
    this.setState({ isLoading: true });

    await addSong(albumMusic);

    this.setState({
      isLoading: false });
  };

  render() {
    const { albumMusic } = this.props;
    const { previewUrl, trackName, trackId } = albumMusic;
    const { isLoading, inputFavorite } = this.state;

    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        {isLoading ? <Loading /> : (
          <label htmlFor="inputFavorite">
            Favorita
            <Input
              type="checkbox"
              checked={ inputFavorite }
              id="inputFavorite"
              name="inputFavorite"
              test={ `checkbox-music-${trackId}` }
              onChange={ this.onInputChange }
              onClick={ () => this.fecthRequisitionFavorites(albumMusic) }
            />
          </label>
        )}

      </div>
    );
  }
}

MusicCard.propTypes = {
  albumMusic: PropTypes.shape({
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    salveFavoriteSongs: PropTypes.shape(
      PropTypes.shape({
        [PropTypes.string]: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default MusicCard;
