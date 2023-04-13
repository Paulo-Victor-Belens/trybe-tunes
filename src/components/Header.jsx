import React, { Component } from 'react';
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
    this.setState({
      name: user.name,
      isLoading: false,
    });
  };

  render() {
    const { isLoading, name } = this.state;
    return (
      <header data-testid="header-component">
        { isLoading
          ? <Loading /> : <div data-testid="header-user-name">{name}</div> }
      </header>
    );
  }
}

export default Header;
