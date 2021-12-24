import { likesEndpoint, commentsEndpoint } from './api.js';

export const commentsCounter = (comments) => {
  const count = comments.length ? comments.length : 0;
  return count;
};

export const getLikes = async () => {
  const response = await fetch(likesEndpoint);
  const likes = await response.json();
  return likes;
};

export const getComments = async (id) => {
  const response = await fetch(`${commentsEndpoint}/comments?item_id=${id}`);
  const comments = await response.json();
  return comments;
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
  console.log(newComment);
  await fetch(commentsEndpoint, {
    method: 'POST',
    body: JSON.stringify({ newComment }), // TODO test without strng
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
