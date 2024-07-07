export const API_URL = 'https://www.corbett-server.cruxdevs.com/graphql';

export const fetchParams = () => {
  let token = '';
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || '';
    token = JSON.parse(token)?.state?.token;
  }

  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  };
};
