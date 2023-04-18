import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';
import Input from '../components/Input';

class Edit extends Component {
  state = {
    isLoading: true,
    inputName: '',
    inputEmail: '',
    inputDescription: '',
    inputImage: '',
    buttonState: true,
  };

  componentDidMount() {
    this.editionProfile();
    this.verifyInputs();
  }

  editionProfile = async () => {
    const previusUser = await this.requestGetUser();
    this.setState({
      inputName: previusUser.name,
      inputEmail: previusUser.email,
      inputDescription: previusUser.description,
      inputImage: previusUser.image,
    }, this.verifyInputs);
  };

  verifyInputs = () => {
    const {
      inputName,
      inputEmail,
      inputDescription,
      inputImage,
    } = this.state;

    const verifyinputName = inputName.length > 0;
    const verifyinputEmail = inputEmail.length > 0;
    const verifyinputDescription = inputDescription.length > 0;
    const verifyinputImage = inputImage.length > 0;

    const resultVeify = verifyinputName
    && verifyinputEmail
    && verifyinputDescription
    && verifyinputImage;

    this.setState({
      buttonState: !resultVeify,
    });
  };

  handlerChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.verifyInputs);
  };

  requestGetUser = async () => {
    const user = await getUser();
    this.setState({ isLoading: false });
    return user;
  };

  editUser = async () => {
    this.setState({ isLoading: true });
    const {
      inputName,
      inputEmail,
      inputDescription,
      inputImage,
    } = this.state;

    await updateUser({
      name: inputName,
      email: inputEmail,
      description: inputDescription,
      image: inputImage,
    });

    const { history } = this.props;
    history.push('/profile');
  };

  render() {
    const { isLoading,
      buttonState,
      inputName,
      inputEmail,
      inputDescription,
      inputImage,
    } = this.state;

    return (
      <div data-testid="page-profile-edit">
        <Header />
        {isLoading ? <Loading /> : (
          <section>
            <Input
              type="text"
              name="inputName"
              id="userName"
              test="edit-input-name"
              onChange={ this.handlerChange }
              value={ inputName }
            />
            <Input
              type="email"
              name="inputEmail"
              id="userEmail"
              test="edit-input-email"
              onChange={ this.handlerChange }
              value={ inputEmail }
            />
            <textarea
              name="inputDescription"
              id="userDescription"
              data-testid="edit-input-description"
              onChange={ this.handlerChange }
              value={ inputDescription }
            />
            <Input
              type="text"
              test="edit-input-image"
              name="inputImage"
              id="userImage"
              onChange={ this.handlerChange }
              value={ inputImage }
            />
            <button
              data-testid="edit-button-save"
              type="button"
              onClick={ this.editUser }
              disabled={ buttonState }
            >
              Salvar
            </button>
          </section>

        )}
      </div>
    );
  }
}

Edit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Edit;
