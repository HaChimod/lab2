const BASE_URL = "https://pst9y9-8081.csb.app";
/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 */
async function fetchModel(url) {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("fetchModel error:", err);
    return null;
  }
}

export default fetchModel;
