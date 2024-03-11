import React, { useState } from "react";
import NewUserInput from "../inputForm/NewUserInput.form";
import axios from "axios";
import { addTeacher } from "../../../../redux/features/teachers/teachersSlice";
import { useDispatch } from "react-redux";
import handleApiError from "../../../../utils/errorHandler/ApiErrors";

const apiKey = process.env.REACT_APP_API_KEY;

function NewTeacher() {
  const [formData, setFormData] = useState({
    userName: "",
    userId: "",
    subject: "",
    contact: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiKey}/teachers/newTeacher`,
        formData
      );
      console.log(response);
      const teacher = response.data.data;

      dispatch(addTeacher(teacher));

      alert(response.data.message);
      // Reset the form after submission
      setFormData({
        userName: "",
        userId: "",
        subject: "",
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
      user={"TEACHER"}
    />
  );
}

export default NewTeacher;
