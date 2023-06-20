import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from './Input';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    isLoading: true,
    isFavorite: false,
    // salveFavoriteSongs: [],
  };

  componentDidMount() {
    this.favoritesResults();
  }

  favoritesResults = async () => {
    const favoriteSongs = await this.fetchRequisitionFavoritesSongs();
    this.verifyFavorites(favoriteSongs);
    this.setState({ isLoading: false });
  };

  fetchRequisitionFavoritesSongs = async () => {
    const resultFavoriteSongs = await getFavoriteSongs();
    return resultFavoriteSongs;
  };

  verifyFavorites = (salveFavoriteSongs) => {
    const { albumMusic } = this.props;
    const { trackId } = albumMusic;
    const isFavorite = salveFavoriteSongs
      .some((songs) => songs.trackId === trackId);
    this.setState({
      isFavorite,
    });
  };

  onInputChange = ({ target: { name, value, type, checked } }) => {
    const { albumMusic } = this.props;
    const value2 = type === 'checkbox' ? checked : value;
    this.setState(
      {
        [name]: value2,
      },
    );
    this.fecthRequisitionFavorites(albumMusic);
  };

  fecthRequisitionFavorites = async (albumMusic) => {
    this.setState({
      isLoading: true,
    });
    const { isFavorite } = this.state;
    const { getStatesOfFavorites } = this.props;
    if (isFavorite) {
      await removeSong(albumMusic);
      const favoriteSongs = await this.fetchRequisitionFavoritesSongs();
      this.verifyFavorites(favoriteSongs);
      this.setState({ isFavorite: false, isLoading: false });
      await getStatesOfFavorites(albumMusic.trackId);
    }
    if (!isFavorite) {
      await addSong(albumMusic);
      const favoriteSongs = await this.fetchRequisitionFavoritesSongs();
      this.verifyFavorites(favoriteSongs);
    }

    this.setState((previus) => ({
      isLoading: false,
      isFavorite: previus.isFavorite,
    }));
  };

  render() {
    const { albumMusic } = this.props;
    const { previewUrl, trackName, trackId } = albumMusic;
    const { isLoading, isFavorite } = this.state;
    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        {isLoading ? <Loading /> : (
          <label htmlFor={ trackId }>
            Favorita
            <Input
              type="checkbox"
              checked={ isFavorite }
              id={ trackId }
              name="isFavorite"
              test={ `checkbox-music-${trackId}` }
              onChange={ this.onInputChange }
              // onClick={ () =>  }
            />
          </label>
        )}

      </div>
    );
  }
}

MusicCard.propTypes = {
  getStatesOfFavorites: PropTypes.func.isRequired,
  albumMusic: PropTypes.shape({
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicCard;
