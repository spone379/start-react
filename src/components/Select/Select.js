import React, { useRef, useState, useEffect, useCallback } from 'react';

import "./Select.scss";
import SelectMenu from './SelectMenu';
import SelectDropIndicator from './SelectDropIndicator';
import SelectOption from './SelectOption';

import { useToggle } from '../../hooks';

{/* 
  
  <Select
    classPrefix="some"
    options={array}                             
    getOptionValue={option => option.someKey}   
    isDisabled={!array.length}
    defaultValue={"some string"}
    onInputChange={onInputValueChangeFunction}
    components={{
      Option: CustomOption
    }}
  />
 */}


const Select = (props) => {
  const { options, defaultValue, getOptionValue, components } = props;

  const inputRef = useRef(null);

  const [isInputFocus, toggleInputFocus] = useToggle(false);

  const [inputValue, setInputValue] = useState(defaultValue);

  const [focused, setFocused] = useState({
    index: 0,
    value: options.length ? getOptionValue(options[0]) : ""
  });

  useEffect(() => {
    // when defaultValue has changed => update inputValue && focus on firstElement
    setInputValue(defaultValue);
    // toggleInputFocus(false);

    setFocused({
      index: 0,
      value: options.length ? getOptionValue(options[0]) : ""
    });

  }, [defaultValue])

  const classPrefix = props.classPrefix
    ? props.classPrefix + "-select"
    : "select";

  const handleToggleFocus = (e) => {
    if (options.length > 1) {
      toggleInputFocus();
    }
  }

  const updateInputValue = (e, option) => {
    e.preventDefault();
    const value = getOptionValue(option);

    if (value === inputValue) return;

    if (props.onInputChange) {
      props.onInputChange(option);
    }

    setInputValue(value);
  }

  const closeMenu = (e, forceClose = false) => {
    // console.log('e.target', e.target.className);

    if (e.target.className === classPrefix + "__input" && !forceClose) return;

    toggleInputFocus();

    if (options.length > 1 && focused.index !== 0) {
      setFocused({
        index: 0,
        value: options.length ? getOptionValue(options[0]) : ""
      });
    }

    inputRef.current.blur();                                // blur after close menu
  }

  const handleKeyDown = useCallback((e) => {
    if (!options.length) return;                            // if no items

    if (e.key === "ArrowDown") {
      if (options.length === 1) return;

      if (focused.index + 1 < options.length) {             // if not last element
        const nextIndex = focused.index + 1;

        setFocused({
          index: nextIndex,
          value: getOptionValue(options[nextIndex])
        })
      }
    }
    if (e.key === "ArrowUp") {
      if (options.length === 1) return;

      if (focused.index) {                                // if not first element
        const prevIndex = focused.index - 1;

        setFocused({
          index: prevIndex,
          value: getOptionValue(options[prevIndex])
        })
      }
    }
    if (e.key === "Enter" && e.shiftKey === false) {
      updateInputValue(e, options[focused.index]);       // pass all object in order for onInputChange can get access for all option properties

      closeMenu(e, true)
    }
  }, [options, focused]);

  const renderOption = () => {
    return components && components.Option
      ? components.Option
      : SelectOption
  }
  // console.log('SELECT RENDER');

  return (
    <div className={classPrefix}>
      <div
        className={classPrefix + "__input-wrap"}
        ref={inputRef}
        onClick={handleToggleFocus}
        style={options.length <= 1 ? { outline: "none" } : null}
        onKeyDown={handleKeyDown}
        tabIndex="0" >

        <span className={classPrefix + "__input-value"}>{inputValue}</span>

        <input
          type="text"
          className={classPrefix + "__input"}
          onChange={() => console.log('change input')}
          value={inputValue}
          disabled={props.isDisabled || false}
          readOnly
        />

        {options.length > 1 &&
          <SelectDropIndicator
            isInputFocus={isInputFocus}
            classPrefix={classPrefix} />
        }
      </div>

      {isInputFocus && options.length > 1 &&
        <SelectMenu
          options={options}
          getOptionValue={getOptionValue}
          defaultValue={inputValue}
          updateInputValue={updateInputValue}
          closeMenu={closeMenu}
          focusedValue={focused.value}
          classPrefix={classPrefix}
          setFocused={setFocused}
          SelectOption={renderOption()}
        />
      }
    </div>
  );
}

export default Select;