import { useEffect, useRef } from 'react'


export default (f, dependencies) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    return f && f();
  }, dependencies)
}
