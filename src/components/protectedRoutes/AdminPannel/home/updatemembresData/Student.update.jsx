import React, { useState } from "react";
import NewUserInput from "../inputForm/NewUserInput.form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../../../../redux/features/students/studentsSlice";
import { useNavigate } from "react-router-dom";
import handleApiError from "../../../../../utils/errorHandler/ApiErrors";
const apiKey = process.env.REACT_APP_API_KEY;

export default function UpdateStudent() {
  let { updatingStudent } = useSelector((state) => state.students);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!updatingStudent) {
    updatingStudent = {
      studentName: "",
      studentId: "",
      Class: "",
      DOB: "",
      parentContact: "",
      _id: "",
    };
  }
  const { studentName, studentId, Class, DOB, parentContact, _id } =
    updatingStudent;
  const [formData, setFormData] = useState({
    userName: studentName,
    userId: studentId,
    Class,
    DOB: DOB?.slice(0, 10),
    contact: parentContact,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${apiKey}/students/changedata/${_id}`,
        formData
      );
      dispatch(updateStudent(response.data.data));
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
      user={"STUDENT"}
    />
  );
}
