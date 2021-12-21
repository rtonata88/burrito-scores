import { likesEndpoint, commentsEndpoint } from "./api";

export const recordLike = async (data) => {
  await fetch(likesEndpoint(), {
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
