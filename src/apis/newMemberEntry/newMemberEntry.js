import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const newStudent = async (data) => {
  const response = await axios.post(`${apiKey}/students/newStudent`, data);
  return response.data;
};

export const newAdmin = async (data) => {
  const response = await axios.post(`${apiKey}/admins/newAdmin`, data);
  return response.data;
};

export const newTeacher = async (data) => {
  const response = await axios.post(`${apiKey}/teachers/newTeacher`, data);
  return response.data;
};
