import useDidUpdate from './useDidUpdate';


const useDebounce = (fn, ms, args) => {
  useDidUpdate(() => {
    const handle = setTimeout(fn.bind(null, args), ms);

    return () => {
      clearTimeout(handle);
    };
  }, [args]);
};

export default useDebounce;