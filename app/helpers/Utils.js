exports.createParametersForEndpoint = (hasMapParams, parametersToReplace) => {
  let params = '';
  hasMapParams.forEach((value, key) => {
    params = parametersToReplace.replace(key, value);
  });
  return params;
};
