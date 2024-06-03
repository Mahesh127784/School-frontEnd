import React, { useState } from "react";
import { addTeacher } from "../../../../../redux/features/teachers/teachersSlice";
import { useDispatch } from "react-redux";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
import { toast } from "react-toastify";
import UserForm from "../inputForm/userform/UserForm";
import { newTeacher } from "../../../../../apis/newMemberEntry/newMemberEntry";

function NewTeacher() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    DOB: "",
    subject: "",
    university: "",
    degree: "",
    city: "",
    startDate: "",
    endDate: "",
    userId: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await newTeacher(formData);

      dispatch(addTeacher(response.data));

      toast.success(response.message);
      // Reset the form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address: "",
        dateOfBirth: "",
        placeOfBirth: "",
        university: "",
        degree: "",
        city: "",
        startDate: "",
        endDate: "",
        userId: "",
      });
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <UserForm
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      user={"Teacher"}
      loading={submitting}
    />
  );
}

export default NewTeacher;
