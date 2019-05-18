import React from 'react';


const SelectOption = ({ value, classPrefix, ...props }) => {
  const focusedClass = props.isFocused
    ? classPrefix + "__item--focused"
    : "";
  const activeClass = props.isActive
    ? classPrefix + "__item--active"
    : "";

  return (
    <div className={`${classPrefix}__option ${activeClass} ${focusedClass}`}>
      {value}
    </div>
  )
}

export default SelectOption;