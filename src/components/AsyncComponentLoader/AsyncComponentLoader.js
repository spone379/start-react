import React from 'react';


const Loading = (props) => {
  if (props.error) {
    return <div style={{ position: 'absolute' }}>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.timedOut) {
    return <div> style={{ position: 'absolute' }}Taking a long time... <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div style={{ position: 'absolute' }}>Loading...</div>;
  } else {
    return null;
  }
}

export default Loading;