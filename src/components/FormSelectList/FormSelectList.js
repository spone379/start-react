import React, { Fragment } from 'react';


const SelectList = (props) => {
  const {
    input,
    name,
    className,
    getErrors,
    placeholder,
    options,
    meta: { error, touched, active }
  } = props;
  const errorClass = (error && touched && !active) ? 'is-invalid' : '';

  const renderOptions = options.map(option => (
    <option key={option.label} value={option.value}>{option.label}</option>
  ));

  return (
    <Fragment>
      <select
        {...input}
        placeholder={placeholder}
        className={`${className} ${errorClass}`}
        name={name}
      >
        {renderOptions}
      </select>

      {error && touched && !active && <div className="invalid-feedback">{error}</div>}

      {/* {getErrors && getErrors[name] && !error && (<div className="invalid-feedback">{getErrors[name].msg}</div>)} */}
    </Fragment>
  )
}

export default SelectList;