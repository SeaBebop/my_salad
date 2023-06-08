const BASE_URL = 'http://localhost:8080';

async function request(endpoint, method = 'GET', data = null, token, cType = 'application/json', params) {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  let options;

  if (method === 'GET') {
    options = {
      method,
      headers: {
        'Content-Type': cType,
        token: token,
      },
    };
  }

  if (data && cType !== 'multipart/form-data') {
    options = {
      method,
      headers: {
        'Content-Type': cType,
        token: token,
      },
    };

    options.body = JSON.stringify(data);
  } else if (data && cType === 'multipart/form-data') {
    options = {
      method,
      headers: {
        token: token,
      },
    };
    options.body = data;
  }

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('An error occurred during the request.');
  }
}

export const api = {
  get: (endpoint, token, params) => request(endpoint, 'GET', undefined, token, undefined, params),
  post: (endpoint, data, token, cType) => request(endpoint, 'POST', data, token, cType),
  put: (endpoint, data, token) => request(endpoint, 'PUT', data, token),
  del: (endpoint) => request(endpoint, 'DELETE'),
};

export const API_BASE_URL = 'http://localhost:8080/api';
