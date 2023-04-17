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

  // componentDidUpdate() {
  //   this.fecthRequisitionFavorites();
  // }

  // getStatesOfFavorites = async (favoritesStates) => {
  //   const favorites = await favoritesStates;
  //   console.log(favorites);
  //   return favorites;
  // };

  // favoritesResults = async () => {
  //   const favoriteSongs = await this.fetchRequisitionFavoritesSongs();
  //   console.log(favoriteSongs);
  //   this.fecthRequisitionFavorites(favoriteSongs);
  //   this.setState({ isLoading: false });
  // };

  // verifyFavorites = (salveFavoriteSongs) => {
  //   const isFavorite = salveFavoriteSongs
  //     .some((songs) => songs.trackId === trackId);
  //   this.setState({
  //     isFavorite,
  //   });
  // };

  // fecthRequisitionFavorites = async (albumMusic) => {
  //   this.setState({
  //     isLoading: true,
  //   });
  //   const { isFavorite2 } = this.state;
  //   if (isFavorite2) {
  //     await removeSong(albumMusic);
  //     const favoriteSongs = await this.fetchRequisitionFavoritesSongs();
  //     this.verifyFavorites(favoriteSongs);
  //   }
  //   this.setState((previus) => ({
  //     isLoading: false,
  //     isFavorite2: previus.isFavorite,
  //   }));
  // };

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
              // getStatesOfFavorites={ this.getStatesOfFavorites }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
