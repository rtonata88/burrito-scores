import { scheduleEndpoint } from './api.js';

const getSchedules = async () => {
  const response = await fetch(scheduleEndpoint());
  const schedule = await response.json();
  return schedule;
};

export default getSchedules;
