import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import Input from '../components/Input';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
// import Loading from '../components/Loading';
import CardsAlbuns from '../components/CardsAlbuns';

class Search extends Component {
  state = {
    responseAPI: [],
    nameArtist: '',
    isLoading: false,
  };

  componentDidMount() {
    this.fetchAlbumAPIRequisition();
  }

  fetchAlbumAPIRequisition = async () => {
    const { inputSearch, clearInputs } = this.props;

    this.setState({
      isLoading: true,
      nameArtist: '',
      responseAPI: [],
    });

    const response = await searchAlbumsAPI(inputSearch);

    this.setState({
      responseAPI: response,
      nameArtist: inputSearch,
    });

    this.setState({
      isLoading: false,
    });
    clearInputs();
  };

  render() {
    const { handlerChange, verifyInputSearch } = this.props;
    const { responseAPI, isLoading, nameArtist } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {isLoading ? <p>Loading...</p> : (
          <fieldset>
            <legend>Pesquisar Artista</legend>

            <Input
              test="search-artist-input"
              type="text"
              name="inputSearch"
              placeholder="Pesquisar Artista"
              onChange={ handlerChange }
            />

            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ verifyInputSearch }
              onClick={ this.fetchAlbumAPIRequisition }
            >
              Pesquisar
            </button>

          </fieldset>
        )}

        <section>
          {responseAPI.length === 0 ? (
            <p>Nenhum álbum foi encontrado</p>
          ) : (
            <section>
              <div>{`Resultado de álbuns de: ${nameArtist}`}</div>
              <div>
                {responseAPI.map((album, index) => (
                  <Link
                    key={ index }
                    data-testid={ `link-to-album-${album.collectionId}` }
                    to={ `/album/${album.collectionId}` }
                  >
                    <CardsAlbuns album={ album } />
                  </Link>
                ))}

              </div>
            </section>
          )}
        </section>

      </div>
    );
  }
}

Search.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  clearInputs: PropTypes.func.isRequired,
  verifyInputSearch: PropTypes.bool.isRequired,
  inputSearch: PropTypes.string.isRequired,
};

export default Search;
