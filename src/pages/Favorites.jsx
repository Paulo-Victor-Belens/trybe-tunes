import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
// removeSong

class Favorites extends Component {
  state = {
    isLoading: true,
    favoriteSongs: [],
  };

  componentDidMount() {
    this.fetchRequisitionFavoritesSongs();
  }

  getStatesOfFavorites = async (id) => {
    this.setState((prevState) => {
      const updatedFavoritesSongs = prevState.favoriteSongs
        .filter(({ trackId }) => trackId !== id);
      return {
        favoriteSongs: updatedFavoritesSongs,
      };
    });
  };

  fetchRequisitionFavoritesSongs = async () => {
    const resultFavoriteSongs = await getFavoriteSongs();
    this.setState({ favoriteSongs: resultFavoriteSongs, isLoading: false });
    return resultFavoriteSongs;
  };

  render() {
    const { favoriteSongs, isLoading, isFavorite2 } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <div>
          {isLoading ? <Loading /> : favoriteSongs.map((song, index) => (
            <MusicCard
              key={ index }
              albumMusic={ song }
              isFavorite2={ isFavorite2 }
              getStatesOfFavorites={ this.getStatesOfFavorites }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
