export const getForecast = () => {
  const accessId = "IXNIhCPJBQ0BoWNenOqFc";
  const secretKey = "lGrPYgi0EFwYUA9202hSFGxxRsOBOr4GJKlnh6hf";
  const url = `http://api.aerisapi.com/forecasts/11101?client_id=${accessId}&client_secret=${secretKey}`;
  return $.get(url);
};
