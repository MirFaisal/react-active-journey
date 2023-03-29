const addToLocalDb = (time) => {
  localStorage.setItem("break-time", time);
};
const getDataFromLocalDb = () => {
  const storedTime = localStorage.getItem("break-time");
  return storedTime;
};

export { addToLocalDb, getDataFromLocalDb };
