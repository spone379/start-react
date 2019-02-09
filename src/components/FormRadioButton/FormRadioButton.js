import React, { Fragment } from 'react';

import './RadioButtonField.css';


const RadioButtonField = (props) => {
  const { input, activeTab, pristine, options, className, meta: { error, touched, active } } = props;

  return (
    <Fragment>
      {options.map(option => (
        <label
          className="radio-btn__label"
          key={option.title}>
          <input
            type="radio"
            {...input}
            className={className}
            defaultChecked={option.tab === activeTab}
            // checked={option.value == input.value}
            value={option.value} />
          {option.title}
        </label>)
      )}

      {error && !pristine && touched && !active && <div className="invalid-feedback">{error}</div>}
    </Fragment>
  );
}

export default RadioButtonField;