import React from 'react';
import Nav from './components/Nav';

class App extends React.Component {
  state = {
    inputName: '',
    verifyInputName: true,
    // isLoading: true,
  };

  handlerChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.verifyInputs);
  };

  verifyInputs = () => {
    const { inputName } = this.state;
    const minLengthInputName = 3;
    if (inputName.length >= minLengthInputName) {
      this.setState({ verifyInputName: false });
    } else {
      this.setState({ verifyInputName: true });
    }
  };

  render() {
    const { inputName, verifyInputName } = this.state;
    return (
      <main>
        <p>TrybeTunes</p>
        <Nav
          inputName={ inputName }
          verifyInputName={ verifyInputName }
          handlerChange={ this.handlerChange }
          // isLoading={ isLoading }
        />
      </main>
    );
  }
}

export default App;
