import { scheduleEndpoint, mainInformationEndpoint } from "./api.js";

export const getSchedules = async () => {
  const response = await fetch(scheduleEndpoint());
  const schedule = await response.json();
  return schedule;
};

export const getMovieInformation = async (movieId) => {
  const response = await fetch(mainInformationEndpoint(movieId));
  const info = await response.json();
  return info;
};
