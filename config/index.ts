export const API_URL = 'http://localhost:4000/graphql';

export const fetchParams = () => {
  let token = '';
  // if (typeof window !== 'undefined') {
  //   token = localStorage.getItem('token') || '';
  //   token = JSON.parse(token)?.state?.token;
  // }

  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  };
};
