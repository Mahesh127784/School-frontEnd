import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
axios.defaults.withCredentials = true;

async function tokensRefresher(user, data) {
  const response = await axios.post(`${apiKey}/${user}/tokensRenew`, data);
  if (response) return response.data;
}

async function UserAuthentication(data) {
  try {
    const response = await axios.post(
      `${apiKey}/users/getCurrentUser`,
      {},
      {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      }
    );
    const resp = response?.data.success;
    if (!resp) {
      // alert("Please login to enter");
      return resp;
    }
    return response.data.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    // alert(error.response.data.data || "Please login with properly to enter");
    return false;
  }
}
export { UserAuthentication, tokensRefresher };
