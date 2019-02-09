import React, { Fragment } from 'react';

import './ErrorField.scss';


const ErrorField = (props) => {
  const {
    input,
    autoFocus,
    pristine,
    className,
    type,
    placeholder,
    getErrors,
    normalize,
    meta: { error, touched, active }
  } = props;
  const errorClass = (error && !pristine && touched && !active) ? 'is-invalid' : '';

  return (
    <Fragment>
      {console.log('input', input, props)}
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={`${className} ${errorClass}`}
        name={input.name}
        normalize={normalize}
        value={input.value}
        autoComplete="off"
        autoFocus={autoFocus}
      />
      {/* Client Error */}
      {error && !pristine && touched && !active && <div className="invalid-feedback">{error}</div>}
      {/* Server Error */}
      {getErrors
        && getErrors[input.name]
        && !error
        && <div className="invalid-feedback">{getErrors[input.name]}</div>
      }
    </Fragment>
  )
}


export default ErrorField;