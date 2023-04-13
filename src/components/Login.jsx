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
      <div data-testid="page-login">
        {
          isLoading
            ? <Loading />
            : (
              <fieldset>
                <legend>Login</legend>
                <Input
                  type="text"
                  name="inputName"
                  test="login-name-input"
                  id="name"
                  onChange={ handlerChange }
                />
                <button
                  type="button"
                  data-testid="login-submit-button"
                  disabled={ verifyInputName }
                  onClick={ this.actionsButton }
                >
                  Entrar
                </button>
              </fieldset>
            )
        }

      </div>
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
