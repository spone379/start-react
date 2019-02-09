import React from 'react';


const Spinner = ({ className }) => (
  <img
    src="/media/spinner.gif"
    width="100%"
    className={className}
    alt="Loading..." />
);

export default Spinner;