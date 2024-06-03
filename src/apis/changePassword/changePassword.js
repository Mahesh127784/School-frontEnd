import axios from "axios";
import { toast } from "react-toastify";
import handleApiError from "../../utils/errorHandler/ApiErrors";
const apiKey = process.env.REACT_APP_API_KEY;

export default async function changeUserPassword(data) {
  try {
    const response = await axios.put(
      `${apiKey}/users/changeCurrentPassword`,
      data
    );
    console.log(response);
    toast.success(response.data.message);
    return true;
  } catch (error) {
    console.log(error);
    handleApiError(error);
    return false;
  }
}
