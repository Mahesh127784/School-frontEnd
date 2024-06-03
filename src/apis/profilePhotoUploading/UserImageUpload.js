import axios from "axios";
import { toast } from "react-toastify";

const apiKey = process.env.REACT_APP_API_KEY;
axios.defaults.withCredentials = true;

export default async function userImageUpload(creds, user) {
  const response = await axios.post(`${apiKey}/${user}/userImage`, creds, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  toast.success(response.data.message);
  return response.data.data;
}
