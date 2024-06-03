import React, { useState } from "react";
import NewUserInput from "../inputForm/userform/UserForm";
import { updateTeacher } from "../../../../../redux/features/teachers/teachersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
import { toast } from "react-toastify";
import { updateTeacherDB } from "../../../../../apis/updatingUser/updateUser";

export default function UpdateTeacher() {
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { updatingTeacher } = useSelector((state) => state.teachers);
  if (!updatingTeacher) {
    updatingTeacher = {
      teacherName: "",
      teacherId: "",
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
      _id: "",
    };
  }
  const {
    teacherName,
    teacherId,
    email,
    address,
    DOB,
    university,
    degree,
    city,
    startDate,
    endDate,
    subject,
    contact,
    _id,
  } = updatingTeacher;

  const [formData, setFormData] = useState({
    firstName: teacherName.split(" ")[0] || "",
    lastName: teacherName.split(" ")[1] || "",
    userId: teacherId,
    email,
    address,
    DOB: DOB?.slice(0, 10),
    university,
    degree,
    city,
    startDate: startDate?.slice(0, 10),
    endDate: endDate?.slice(0, 10),
    subject,
    contact,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await updateTeacherDB(formData, _id);
      dispatch(updateTeacher(response.data.data));
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
    <NewUserInput
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      loading={submitting}
      user={"Teacher"}
    />
  );
}
