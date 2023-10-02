export const fetchAPI = async (path) => {
  const requestUrl = `${import.meta.env.VITE_API_URL}${path}`;

  const response = await fetch(requestUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};

export const paymentRequest = async (path, cart) => {
  const requestUrl = `${import.meta.env.VITE_API_URL}${path}`;

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify(cart),
  });
  const data = await response.json();
  return data;
};
