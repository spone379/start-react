import React from 'react';
import { useDidMount, useWillUnmount } from '../../hooks';


const SelectMenu = (props) => {
  useDidMount(() => {
    document.addEventListener('click', props.closeMenu);
    document.addEventListener('keydown', preventArrowKeys);
  });

  useWillUnmount(() => {
    document.removeEventListener('click', props.closeMenu);
    document.removeEventListener('keydown', preventArrowKeys);
  });

  const preventArrowKeys = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
    }
  }

  return (
    <ul className={props.classPrefix + "__list"}>
      {props.options.map((option, index) => {
        const optionValue = props.getOptionValue(option);

        return (
          <li
            className={props.classPrefix + "__item"}
            key={option.id || index}
            // pass all object in order for onInputChange can get access for all option properties
            onClick={(e) => props.updateInputValue(e, option)} >

            <props.SelectOption
              value={optionValue}
              option={option}
              isActive={props.defaultValue === optionValue}
              isFocused={props.focusedValue === optionValue}
              classPrefix={props.classPrefix}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default SelectMenu;