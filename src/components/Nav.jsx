import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';
import Login from './Login';

class Nav extends Component {
  render() {
    const {
      handlerChange,
      verifyInputName,
      inputName,
      verifyInputSearch,
      clearInputs,
      inputSearch,
    } = this.props;
    return (
      <div>

        <Switch>
          <Route
            exact
            path="/search"
            render={ () => (<Search
              handlerChange={ handlerChange }
              verifyInputSearch={ verifyInputSearch }
              inputSearch={ inputSearch }
              clearInputs={ clearInputs }
            />) }
          />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route
            exact
            path="/"
            render={ (props) => (<Login
              handlerChange={ handlerChange }
              verifyInputName={ verifyInputName }
              inputName={ inputName }
              { ...props }
            />) }
          />
          <Route exact path="*" component={ NotFound } />
        </Switch>

      </div>
    );
  }
}

Nav.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  clearInputs: PropTypes.func.isRequired,
  verifyInputName: PropTypes.bool.isRequired,
  verifyInputSearch: PropTypes.bool.isRequired,
  inputName: PropTypes.string.isRequired,
  inputSearch: PropTypes.string.isRequired,
  // isLoading: PropTypes.bool.isRequired,
};

export default Nav;
