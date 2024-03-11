const handleApiError = (error) => {
  const validationErr = error.response?.data?.errors;
  const inputErr = error.response?.data?.data;

  if (Array.isArray(validationErr) && validationErr[0]) {
    alert(validationErr[0].msg);
  } else if (inputErr) {
    alert(inputErr);
  } else {
    alert("Something went wrong");
  }
};

export default handleApiError;
