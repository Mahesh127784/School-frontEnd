import axios from "axios";
import handleApiError from "../../utils/errorHandler/ApiErrors";
import { toast } from "react-toastify";
const apiKey = process.env.REACT_APP_API_KEY;

export default async function FormSubmit(creds) {
  try {
    console.log(creds);
    const response = await axios.post(
      `${apiKey}/admissions/admission-form`,
      creds,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    handleApiError(error);
    return false;
  }
}
