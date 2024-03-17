import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAdmin } from "../../../../../redux/features/admins/adminsSlice";
import React, { useState } from "react";
import NewAdminInput from "../inputForm/Admin.form";
import axios from "axios";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
const apiKey = process.env.REACT_APP_API_KEY;

export default function UpdateAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { updatingAdmin } = useSelector((state) => state.admins);
  if (!updatingAdmin) {
    updatingAdmin = {
      adminName: "",
      adminCode: "",
      email: "",
      password: "",
      password2: "",
      _id: "",
    };
  }
  const { adminName, adminCode, email, _id } = updatingAdmin;
  const [formData, setFormData] = useState({
    adminName,
    adminCode,
    email,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, password2 } = formData;
    if (password !== password2) {
      alert("Mismatch between both the passwords you are entering");
      return;
    }
    try {
      const response = await axios.put(
        `${apiKey}/admins/changeData/${_id}`,
        formData
      );
      dispatch(updateAdmin(response.data.data));
      navigate("/adminHome");
      alert(response.data.message);
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
