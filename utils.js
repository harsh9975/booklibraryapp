export function convertToSnakeCase(text) {
  return text.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

export const isObject = variable => {
  return (
    variable !== null &&
    typeof variable === 'object' &&
    !Array.isArray(variable)
  );
};
