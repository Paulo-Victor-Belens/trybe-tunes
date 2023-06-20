import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Profile extends Component {
  state = {
    isLoading: true,
    user: {},
  };

  componentDidMount() {
    this.requestGetUser();
  }

  requestGetUser = async () => {
    const user = await getUser();
    this.setState({ user, isLoading: false });
  };

  render() {
    const { isLoading, user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {isLoading ? <Loading /> : (
          <div>
            <section>
              <div>
                <Link to="/profile/edit">Editar perfil</Link>
              </div>
              <div>
                <img
                  src={ user.image }
                  alt="imagem do usuário"
                  data-testid="profile-image"
                />
              </div>
            </section>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
