import { scheduleEndpoint, likesEndpoint, commentsEndpoint } from "./api";

export const getSchedule = async () => {
  const response = await fetch(scheduleEndpoint);
  const schedule = await response.json();
  return schedule;
};

export const recordLike = async (data) => {
  await fetch(likesEndpoint, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const scheduleTitlesCounter = (schedule) => {
  return schedule.length;
};

export const commentsCounter = (comments) => {
  return comments.length;
};
