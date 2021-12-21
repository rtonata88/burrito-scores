const baseUrl = "https://api.tvmaze.com";
export const mainInformationUrl = function (id) {
  return `${baseUrl}/shows/${id}?embed=cast`;
};
export const episodeEndpoint = function (id) {
  return `${baseUrl}/shows/${id}/episodes`;
};

export const seasonsEndpoint = function (id) {
  return `${baseUrl}/shows/${id}/seasons`;
};

export const castsEndpoint = function (id) {
  return `${baseUrl}/shows/${id}/cast`;
};

export const involvementBaseUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
export const appId = "Jt5YzjOBNLKzr84EQRZx";
export const likesEndpoint = `${involvementBaseUrl}/${appId}/likes`;
export const commentsEndpoint = `${involvementBaseUrl}/${appId}/comments`;
