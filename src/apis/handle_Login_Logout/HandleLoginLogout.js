import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
axios.defaults.withCredentials = true;

async function AdminLogin(creds) {
  const response = await axios.post(`${apiKey}/admins/adminLogin`, creds);
  alert("Login successfull");
  return response.data;
}

async function UserLogin(creds) {
  const response = await axios.post(`${apiKey}/users/login`, creds);
  alert("Login successfull");
  return response.data;
}

async function UsersLogout() {
  await axios.post(`${apiKey}/users/logout`);
  localStorage.removeItem("tokens");
}

export { AdminLogin, UserLogin, UsersLogout };
