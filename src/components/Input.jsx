import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      type,
      name,
      id,
      placeholder,
      value,
      onChange,
      test,
      checked,
      disabled,
      className,
      onClick,
    } = this.props;
    return (

      <input
        type={ type }
        name={ name }
        id={ id }
        placeholder={ placeholder }
        checked={ checked }
        value={ value }
        onChange={ onChange }
        data-testid={ test }
        disabled={ disabled }
        className={ className }
        onClick={ onClick }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  test: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.bool.isRequired,
};

export default Input;
