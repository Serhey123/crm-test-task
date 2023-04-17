export default function errorsPicker(errorObj) {
  const keys = Object.keys(errorObj);
  if (keys.length === 0) {
    return;
  }
  return errorObj[keys[0]];
}
