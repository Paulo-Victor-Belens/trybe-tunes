import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MusicCard extends Component {
  render() {
    const { albumMusic } = this.props;
    const { previewUrl, trackName } = albumMusic;
    return (
      <div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <p>{ trackName }</p>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  albumMusic: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    // trackId: PropTypes.number.isRequired,
  }).isRequired,
};
export default MusicCard;
