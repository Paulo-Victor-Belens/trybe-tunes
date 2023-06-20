import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  state = {
    name: '',
    isLoading: false,
  };

  componentDidMount() {
    this.responseGetUser();
  }

  responseGetUser = async () => {
    this.setState({
      isLoading: true,
    });
    const user = await getUser();
    const { name } = user;
    this.setState({
      name,
      isLoading: false,
    });
  };

  render() {
    const { isLoading, name } = this.state;
    return (
      <header data-testid="header-component">
        <div>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </div>
        { isLoading
          ? <Loading /> : <div data-testid="header-user-name">{name}</div> }
      </header>
    );
  }
}

export default Header;
