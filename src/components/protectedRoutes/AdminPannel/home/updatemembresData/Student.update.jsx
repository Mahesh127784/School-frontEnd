import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../../../../redux/features/students/studentsSlice";
import { useNavigate } from "react-router-dom";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
import { toast } from "react-toastify";
import UserForm from "../inputForm/userform/UserForm";
import { updateStudentDB } from "../../../../../apis/updatingUser/updateUser";

export default function UpdateStudent() {
  const [submitting, setSubmitting] = useState(false);
  let { updatingStudent } = useSelector((state) => state.students);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!updatingStudent) {
    updatingStudent = {
      studentName: "",
      contact: "",
      address: "",
      DOB: "",
      guardianName: "",
      guardianPhone: "",
      enrollmentDate: "",
      Class: "",
      section: "",
      studentId: "",
      _id: "",
    };
  }
  const {
    studentName,
    address,
    guardianName,
    guardianPhone,
    enrollmentDate,
    section,
    studentId,
    Class,
    DOB,
    contact,
    _id,
  } = updatingStudent;

  const [formData, setFormData] = useState({
    firstName: studentName.split(" ")[0] || "",
    lastName: studentName.split(" ")[1] || "",
    address,
    guardianName,
    guardianPhone,
    enrollmentDate,
    section,
    userId: studentId,
    Class,
    DOB: DOB?.slice(0, 10),
    contact: contact || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await updateStudentDB(formData, _id);
      dispatch(updateStudent(response.data));
      navigate("/adminhome");
      toast.success(response.message);
      // Reset the form after submission
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
      loading={submitting}
      user={"Student"}
    />
  );
}
