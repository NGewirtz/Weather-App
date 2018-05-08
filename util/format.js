export const dateFormatter = date => {
  return date.split("")
    .slice(5, 10)
    .join("");
};
