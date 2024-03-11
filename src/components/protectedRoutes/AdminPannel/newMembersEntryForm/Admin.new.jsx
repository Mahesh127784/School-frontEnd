import React, { useState } from "react";
import NewAdminInput from "../inputForm/Admin.form";
import axios from "axios";
import handleApiError from "../../../../utils/errorHandler/ApiErrors";

const apiKey = process.env.REACT_APP_API_KEY;

function NewAdmin() {
  const [formData, setFormData] = useState({
    adminName: "",
    adminCode: "",
    work: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, password2 } = formData;
    if (password !== password2) {
      alert("Mismatch between both the passwords you are entering");
      return;
    }
    try {
      const response = await axios.post(`${apiKey}/admins/newAdmin`, formData);

      alert(response.data.message);
      setFormData({
        adminName: "",
        adminCode: "",
        email: "",
        work: "",
        password: "",
        password2: "",
      });
    } catch (error) {
      handleApiError(error);
    }
  };
  return (
    <NewAdminInput
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
}

export default NewAdmin;
