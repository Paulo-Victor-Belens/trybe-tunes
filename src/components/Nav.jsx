import React, { Component } from 'react';
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
    return (
      <div>

        <Switch>
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="/" component={ Login } />
          <Route exact path="*" component={ NotFound } />
        </Switch>

      </div>
    );
  }
}

export default Nav;
