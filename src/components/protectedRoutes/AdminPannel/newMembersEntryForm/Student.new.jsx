import React, { useState } from "react";
import NewUserInput from "../inputForm/NewUserInput.form";
import axios from "axios";
import { addStudent } from "../../../../redux/features/students/studentsSlice";
import { useDispatch } from "react-redux";
import handleApiError from "../../../../utils/errorHandler/ApiErrors";
const apiKey = process.env.REACT_APP_API_KEY;

const AddNewStudent = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userId: "",
    Class: "",
    DOB: "",
    contact: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiKey}/students/newStudent`,
        formData
      );
      const student = response.data.data;
      dispatch(addStudent(student));
      alert(response.data.message);
      // Reset the form after submission
      setFormData({
        userName: "",
        userId: "",
        Class: "",
        DOB: "",
        contact: "",
      });
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
};

export default AddNewStudent;
