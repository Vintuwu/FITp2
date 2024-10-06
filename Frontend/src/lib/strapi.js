const STRAPI_HOST = process.env.REACT_APP_STRAPI_HOST;
const STRAPI_TOKEN = process.env.REACT_APP_STRAPI_TOKEN;

export function query(url) {
  const fullUrl = `${STRAPI_HOST}/api/${url}`;
  console.log("Requesting:", fullUrl);

  return fetch(fullUrl, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => {
    console.log("Response status:", res.status);
    return res.json();
  });
}
