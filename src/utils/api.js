import { API_URL, STRAPI_API_TOKEN } from "./url";

export const featchDataFromApi = async (endpoint) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${STRAPI_API_TOKEN}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(`${API_URL}${endpoint}`, requestOptions);
  const data = await res.json();

  return data;
};

export const paymentRequest = async (path, cart) => {
  const requestUrl = `${API_URL}${path}`;

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(cart),
  });
  const data = await response.json();
  return data;
};
