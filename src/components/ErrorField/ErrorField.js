import React, { Component, Fragment } from 'react';

import './ErrorField.css';


class ErrorField extends Component {
  
  render() {
    const { input, pristine, className, type, placeholder, getErrors, normalize, meta: { error, touched, active } } = this.props;

    const errorClass = (error && !pristine && touched && !active) ? 'is-invalid' : '';

    return (
      <Fragment>
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          className={`${className} ${errorClass}`}
          name={input.name}
          normalize={normalize}
          value={input.value}
        />
        {/* Client Error */}
        {error && !pristine && touched && !active && <div className="invalid-feedback">{error}</div>}
        {/* Server Error */}
        {/* {getErrors 
          && getErrors[input.name] 
          && !error 
          && <div className="invalid-feedback">{getErrors[input.name]}</div>
        } */}
      </Fragment>
    )
  }
}

export default ErrorField;