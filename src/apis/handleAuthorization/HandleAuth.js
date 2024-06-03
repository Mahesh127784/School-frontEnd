import axios from "axios";
import { toast } from "react-toastify";
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
    if (!resp) toast.success("Please login to enter");
    else toast.success(resp);

    return response.data.data;
  } catch (error) {
    if (error?.response?.data?.message)
      toast.error(error?.response?.data?.message);
    else return false;
  }
}
export { UserAuthentication, tokensRefresher };
