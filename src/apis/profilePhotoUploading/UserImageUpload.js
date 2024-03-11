import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
axios.defaults.withCredentials = true;

export default async function userImageUpload(creds) {
  console.log(creds);
  const response = await axios.post(`${apiKey}/admins/userImage`, creds, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response.data.message);
  return response.data.data;
}
