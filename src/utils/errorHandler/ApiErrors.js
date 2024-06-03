import { toast } from "react-toastify";

const handleApiError = (error) => {
  const validationErr = error.response?.data?.errors;
  const inputErr = error.response?.data?.data;

  if (Array.isArray(validationErr) && validationErr[0]) {
    toast.error(validationErr[0].msg);
  } else if (inputErr) {
    toast.error(inputErr);
  } else {
    toast.error("Something went wrong");
  }
};

export default handleApiError;
