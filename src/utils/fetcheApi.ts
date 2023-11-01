import axios from 'axios';

const API_URL = 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL';

export const fetche = (query : string) => (
  axios.post(API_URL as string, { query })
);
