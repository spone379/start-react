import { useEffect, useState } from 'react';
import { usePrevious } from '../../hooks';

//
// Example: 
//     <DelayedComponent
//       delayUnmountTime={500}                   :int
//       isMount={this.state.mountSomeComponent}  :bool !
//      >
//          <SomeComponent />
//      </DelayedComponent>


// Use when we need animate element before he will unmount
const DelayedComponent = ({ isMount, ...props }) => {
  const [shouldRender, setShouldRender] = useState(isMount);
  const prevIsMount = usePrevious(isMount);

  useEffect(() => {
    if (!isMount && prevIsMount) {
      setTimeout(() => {
        setShouldRender(false);
      }, props.delayUnmountTime || 500);
    }
    else if (!prevIsMount && isMount) {
      setShouldRender(true)
    }

  }, [shouldRender, isMount])

  return shouldRender
    ? props.children
    : null;
}

export default DelayedComponent;