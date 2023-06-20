import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CardsAlbuns extends Component {
  render() {
    const { album } = this.props;
    const { artistName, artworkUrl100, collectionName } = album;
    return (
      <div>
        <img src={ artworkUrl100 } alt={ artistName } />
        <p>{collectionName}</p>
        <p>{artistName}</p>
      </div>
    );
  }
}

CardsAlbuns.propTypes = {
  album: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardsAlbuns;
