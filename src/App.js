import React from 'react';
import Nav from './components/Nav';

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

  render() {
    const { inputName, verifyInputName, verifyInputSearch } = this.state;
    return (
      <main>
        <p>TrybeTunes</p>
        <Nav
          inputName={ inputName }
          verifyInputName={ verifyInputName }
          verifyInputSearch={ verifyInputSearch }
          handlerChange={ this.handlerChange }
        />
      </main>
    );
  }
}

export default App;
