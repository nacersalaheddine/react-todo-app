export const dataKey = "todos";
export const saveToDB = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const getData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
export const clearDB = () => {
  //clears the local storage data
  localStorage.clear();
};
