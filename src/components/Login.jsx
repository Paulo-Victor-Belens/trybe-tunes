import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from './Input';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  state = {
    isLoading: false,
  };

  actionsButton = async () => {
    const { history, inputName } = this.props;
    this.setState({
      isLoading: true,
    });
    await createUser({ name: inputName });
    this.setState({
      isLoading: false,
    });
    history.push('/search');
  };

  render() {
    const { verifyInputName, handlerChange } = this.props;
    const { isLoading } = this.state;

    return (
      <section className="container__login">
        {
          isLoading
            ? <Loading />
            : (
              <form className="form__login">
                <div className="container__image__login"></div>
                <div>
                  <Input
                    type="text"
                    name="inputName"
                    test="login-name-input"
                    id="name"
                    onChange={ handlerChange }
                  />
                </div>
                <div>
                  <button
                    type="button"
                    data-testid="login-submit-button"
                    disabled={ verifyInputName }
                    onClick={ this.actionsButton }
                  >
                    Entrar
                  </button>
                </div>
              </form>
            )
        }

      </section>
    );
  }
}

Login.propTypes = {
  verifyInputName: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
