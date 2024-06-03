import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAdmin } from "../../../../../redux/features/admins/adminsSlice";
import React, { useState } from "react";
import NewAdminInput from "../inputForm/Admin.form";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
import { toast } from "react-toastify";
import { updateAdminDB } from "../../../../../apis/updatingUser/updateUser";

export default function UpdateAdmin() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { updatingAdmin } = useSelector((state) => state.admins);
  if (!updatingAdmin) {
    updatingAdmin = {
      adminName: "",
      adminCode: "",
      work: "",
      password: "",
      password2: "",
      _id: "",
    };
  }
  const { adminName, adminCode, work, email, _id } = updatingAdmin;
  const [formData, setFormData] = useState({
    adminName,
    adminCode,
    email,
    work,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, password2 } = formData;
    if (password !== password2) {
      toast.error("Mismatch between both the passwords you are entering");
      return;
    }
    setSubmitting(true);
    try {
      const response = await updateAdminDB(formData, _id);
      dispatch(updateAdmin(response.data));
      navigate("/adminhome");
      toast.success(response.message);
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <NewAdminInput
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      loading={submitting}
    />
  );
}
