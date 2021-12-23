import { likesEndpoint, commentsEndpoint } from './api.js';

export const getLikes = async () => {
  const response = await fetch(likesEndpoint);
  const likes = await response.json();
  return likes;
};

export const recordLike = async (data) => {
  await fetch(likesEndpoint, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const recordComment = async (newComment) => {
  await fetch(commentsEndpoint(), {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const scheduleTitlesCounter = (schedule) => schedule.length;

export const commentsCounter = (comments) => {
  const count = comments.length ? comments.length : 0;
  return count;
};
