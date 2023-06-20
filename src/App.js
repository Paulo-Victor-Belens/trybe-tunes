import React from 'react';
import Nav from './components/Nav';
import './css/login.css';

class App extends React.Component {
  state = {
    inputName: '',
    verifyInputName: true,
    verifyInputSearch: true,
    inputSearch: '',
  };

  handlerChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.verifyInputs);
  };

  verifyInputs = () => {
    const { inputName, inputSearch } = this.state;
    const minLengthInputName = 3;
    const minLengthInputSearch = 2;
    if (inputName.length >= minLengthInputName) {
      this.setState({ verifyInputName: false });
    } else {
      this.setState({ verifyInputName: true });
    }
    if (inputSearch.length >= minLengthInputSearch) {
      this.setState({ verifyInputSearch: false });
    } else {
      this.setState({ verifyInputSearch: true });
    }
  };

  clearInputs = () => {
    this.setState({ inputSearch: '' });
  };

  render() {
    const { inputName, verifyInputName, verifyInputSearch, inputSearch } = this.state;
    return (
      <main className="flex-container">
        <div>
          <h1 className="container__title">TrybeTunes</h1>
        </div>
        <section>
          <Nav
            inputName={ inputName }
            verifyInputName={ verifyInputName }
            verifyInputSearch={ verifyInputSearch }
            inputSearch={ inputSearch }
            handlerChange={ this.handlerChange }
            clearInputs={ this.clearInputs }
          />
        </section>
      </main>
    );
  }
}

export default App;
