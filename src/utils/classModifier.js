export default (mainClass, modifier = '') => {
  if (!modifier) {
    return mainClass;
  }
  if (!Array.isArray(modifier)) {
    modifier = modifier.split(' ');
  }
  modifier = modifier
    .filter(className => className)
    .map(className => `${mainClass}--${className.toLowerCase()}`);

  return [mainClass, ...modifier].join(' ');
};
