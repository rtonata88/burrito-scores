const baseUrl = 'https://api.tvmaze.com';
export const scheduleEndpoint = () => {
  const today = new Date();
  // eslint-disable-next-line no-unused-vars
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  return `${baseUrl}/schedule/web?date=2021-12-21`;
};
export const mainInformationEndpoint = (id) => `${baseUrl}/shows/${id}`;

export const episodeEndpoint = (id) => `${baseUrl}/shows/${id}/episodes`;

export const seasonsEndpoint = (id) => `${baseUrl}/shows/${id}/seasons`;

export const castsEndpoint = (id) => `${baseUrl}/shows/${id}/cast`;

export const involvementBaseUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
export const appId = 'Jt5YzjOBNLKzr84EQRZx';
export const likesEndpoint = `${involvementBaseUrl}/${appId}/likes`;
export const commentsEndpoint = `${involvementBaseUrl}/${appId}/comments`;
