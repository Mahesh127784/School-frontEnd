import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const updateAdminDB = async (data, id) => {
  const response = await axios.put(`${apiKey}/admins/changeData/${id}`, data);
  return response.data;
};

export const updateStudentDB = async (data, id) => {
  const response = await axios.put(`${apiKey}/students/changedata/${id}`, data);
  return response.data;
};
export const updateTeacherDB = async (data, id) => {
  const response = await axios.put(`${apiKey}/teachers/changedata/${id}`, data);
  return response.data;
};
