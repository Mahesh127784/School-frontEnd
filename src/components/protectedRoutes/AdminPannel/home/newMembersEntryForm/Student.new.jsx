import React, { useState } from "react";
import { addStudent } from "../../../../../redux/features/students/studentsSlice";
import { useDispatch } from "react-redux";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
import { toast } from "react-toastify";
import UserForm from "../inputForm/userform/UserForm.jsx";
import { newStudent } from "../../../../../apis/newMemberEntry/newMemberEntry.js";

const AddNewStudent = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
    DOB: "",
    guardianName: "",
    guardianPhone: "",
    enrollmentDate: "",
    Class: "",
    section: "",
    userId: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await newStudent(formData);

      dispatch(addStudent(response.data));
      toast.success(response.message);
      // Reset the form after submission
      setFormData({
        firstName: "",
        lastName: "",
        contact: "",
        address: "",
        DOB: "",
        guardianName: "",
        guardianPhone: "",
        enrollmentDate: "",
        section: "",
        Class: "",
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
      user={"Student"}
      loading={submitting}
    />
  );
};

export default AddNewStudent;
