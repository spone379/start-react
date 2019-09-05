import React, { useEffect } from 'react';

// Example:
//     <DropWrapper
//       className='some-class'
//       childRef={childRef}               // useRef
//       closeDropWrapper={toggleChild}>   // useToggle
//       <Component
//         ref={childRef} />
//     </DropWrapper> 

const DropWrapper = ({ childRef, closeDropWrapper, ...props }) => {
  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (!childRef.current.contains(e.target) || e.key === 'Escape') {
        document.removeEventListener('mousedown', closeOnOutsideClick);
        document.removeEventListener('keyup', closeOnOutsideClick);

        closeDropWrapper(false); // useToggle hook expected
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keyup', closeOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keyup', closeOnOutsideClick);
    };
  }, [closeDropWrapper]);

  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export default DropWrapper;