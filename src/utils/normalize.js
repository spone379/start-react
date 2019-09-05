export default (data, key = 'id') => {
  let arrData = data;

  if (data instanceof Object && data.constructor === Object) {
    arrData = [data];
  }

  const entities = {};

  const result = arrData.map(item => {
    entities[item[key]] = item;

    return item[key];
  })

  return { entities, result };
}