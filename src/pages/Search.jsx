import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';

class Search extends Component {
  render() {
    const { handlerChange, verifyInputSearch } = this.props;
    return (
      <div data-testid="page-search">
        <Header />
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
          >
            Pesquisar
          </button>

        </fieldset>
      </div>
    );
  }
}

Search.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  verifyInputSearch: PropTypes.bool.isRequired,
};

export default Search;
