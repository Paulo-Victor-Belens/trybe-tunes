import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  state = {
    objectMusic: '',
    music: [],
  };

  componentDidMount() {
    this.fetchRequisitionMusicAPI();
  }

  fetchRequisitionMusicAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const responseApi = await getMusics(id);
    console.log(responseApi);
    const arraymusic = [];
    for (let i = 1; i < responseApi.length; i += 1) {
      arraymusic.push(responseApi[i]);
    }
    this.setState({
      objectMusic: responseApi,
      music: arraymusic,
    });
  };

  render() {
    const { objectMusic, music } = this.state;
    const verifyLength = objectMusic.length > 0;
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <p data-testid="artist-name">{verifyLength && objectMusic[0].artistName}</p>
          <p data-testid="album-name">{verifyLength && objectMusic[0].collectionName}</p>
        </div>
        <section>
          {verifyLength && music.map((albumMusic, index) => (
            <MusicCard
              key={ index }
              albumMusic={ albumMusic }
            />
          ))}
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
