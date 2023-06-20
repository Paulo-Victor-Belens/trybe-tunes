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
import smartPhone01 from '../images/images-styles-css/smartPhone01.svg';
import smartPhone02 from '../images/images-styles-css/smartPhone02.svg';
import smartPhone03 from '../images/images-styles-css/smartPhone03.svg';
import smartPhone04 from '../images/images-styles-css/smartPhone04.svg';
import smartPhone05 from '../images/images-styles-css/smartPhone05.svg';
import smartPhone06 from '../images/images-styles-css/smartPhone06.svg';

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
      <section>

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
          <div className="container__images__login">
            <img
              src={ smartPhone01 }
              alt="smartPhone01"
              id="img__login__01"
            />
            <img
              src={ smartPhone02 }
              alt="smartPhone02"
              id="img__login__02"
            />
            <img
              src={ smartPhone03 }
              alt="smartPhone03"
              id="img__login__03"
            />
            <img
              src={ smartPhone04 }
              alt="smartPhone04"
              id="img__login__04"
            />
            <img
              src={ smartPhone05 }
              alt="smartPhone05"
              id="img__login__05"
            />
            <img
              src={ smartPhone06 }
              alt="smartPhone06"
              id="img__login__06"
            />
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
          </div>
          <Route exact path="*" component={ NotFound } />
        </Switch>

      </section>
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
};

export default Nav;
