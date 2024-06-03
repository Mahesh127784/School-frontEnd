import axios from "axios";
import { toast } from "react-toastify";
const apiKey = process.env.REACT_APP_API_KEY;
axios.defaults.withCredentials = true;

async function UserSignup(creds) {
  await axios.post(`${apiKey}/users/register`, creds);
}
async function AdminLogin(creds) {
  const response = await axios.post(`${apiKey}/admins/adminLogin`, creds);
  toast.success("Login successfull");
  return response.data;
}

async function UserLogin(creds) {
  const response = await axios.post(`${apiKey}/users/login`, creds);
  toast.success("Login successfull");
  return response.data;
}

async function UsersLogout() {
  await axios.post(`${apiKey}/users/logout`);
  localStorage.removeItem("tokens");
}

export { UserSignup, AdminLogin, UserLogin, UsersLogout };
