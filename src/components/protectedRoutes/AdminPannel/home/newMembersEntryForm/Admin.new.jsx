import React, { useState } from "react";
import NewAdminInput from "../inputForm/Admin.form";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
import { toast } from "react-toastify";
import { newAdmin } from "../../../../../apis/newMemberEntry/newMemberEntry";

function NewAdmin() {
  const [submitting, setSubmitting] = useState(false);
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
      toast.error(
        "Mismatch between both the passwords, Please enter correctly"
      );
      return;
    }
    setSubmitting(true);

    try {
      const response = await newAdmin(formData);

      toast.success(response.message);
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

export default NewAdmin;
