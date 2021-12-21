import { likesEndpoint, commentsEndpoint } from './api.js';

export const recordLike = async (data) => {
  await fetch(likesEndpoint(), {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const scheduleTitlesCounter = (schedule) => schedule.length;

export const commentsCounter = (comments) => comments.length;
