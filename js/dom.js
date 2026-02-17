export const qs = (selector, scope = document) => scope.querySelector(selector);

export const createOption = (value, label) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  return option;
};
