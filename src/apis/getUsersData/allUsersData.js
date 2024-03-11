import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

const getAllUsers = async (user) => {
  const response = await axios.get(`${apiKey}/${user}/getAllUsers`);
  return response;
};

export { getAllUsers };
