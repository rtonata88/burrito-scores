import { scheduleEndpoint } from './api.js';

const getSchedules = async () => {
  // console.log(scheduleEndpoint());
  const response = await fetch(scheduleEndpoint());
  const schedule = await response.json();
  return schedule;
};

export default { getSchedules };