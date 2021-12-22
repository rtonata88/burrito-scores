const baseUrl = "https://api.tvmaze.com";
export const scheduleEndpoint = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  return `${baseUrl}/schedule/web?date=2021-12-21`;
};
export const mainInformationEndpoint = (id) =>
  `${baseUrl}/shows/${id}?embed=cast`;

export const episodeEndpoint = (id) => `${baseUrl}/shows/${id}/episodes`;

export const seasonsEndpoint = (id) => `${baseUrl}/shows/${id}/seasons`;

export const castsEndpoint = (id) => `${baseUrl}/shows/${id}/cast`;

export const involvementBaseUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
export const appId = "Jt5YzjOBNLKzr84EQRZx";
export const likesEndpoint = `${involvementBaseUrl}/${appId}/likes`;
export const commentsEndpoint = `${involvementBaseUrl}/${appId}/comments`;
