import React, { useState } from "react";
import NewUserInput from "../inputForm/NewUserInput.form";
import axios from "axios";
import { updateTeacher } from "../../../../../redux/features/teachers/teachersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
const apiKey = process.env.REACT_APP_API_KEY;

export default function UpdateTeacher() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { updatingTeacher } = useSelector((state) => state.teachers);
  if (!updatingTeacher) {
    updatingTeacher = {
      teacherName: "",
      teacherId: "",
      subject: "",
      contactNumber: "",
      _id: "",
    };
  }
  const { teacherName, teacherId, subject, contactNumber, _id } =
    updatingTeacher;
  const [formData, setFormData] = useState({
    userName: teacherName,
    userId: teacherId,
    subject,
    contact: contactNumber,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${apiKey}/teachers/changedata/${_id}`,
        formData
      );
      dispatch(updateTeacher(response.data.data));
      navigate("/adminHome");
      alert(response.data.message);

      // Reset the form after submission
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <NewUserInput
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      user={"TEACHER"}
    />
  );
}
