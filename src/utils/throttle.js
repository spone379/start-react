export default function throttle(func, ms, disableLastCall) {

  var isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        if (!disableLastCall) {
          wrapper.apply(savedThis, savedArgs);
        }
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}