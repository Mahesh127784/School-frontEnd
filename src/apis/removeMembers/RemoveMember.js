import axios from "axios";
import { toast } from "react-toastify";
const apiKey = process.env.REACT_APP_API_KEY;

export default async function RemoveMember(member, id) {
  try {
    const response = await axios.delete(`${apiKey}/${member}/deleteData/${id}`);
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.message);
  }
}
