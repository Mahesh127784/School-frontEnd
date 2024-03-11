import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

export default async function RemoveMember(member, id) {
  try {
    const response = await axios.delete(`${apiKey}/${member}/deleteData/${id}`);
    return response.data.message;
  } catch (error) {
    return error.message;
  }
}
