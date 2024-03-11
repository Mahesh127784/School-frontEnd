import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  updatingStudent: "",
  student: true,
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,

  reducers: {
    showStudent: (state, action) => {
      state.student = action.payload;
    },
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student._id !== action.payload
      );
    },
    updateStudent: (state, action) => {
      function isObject(variable) {
        return typeof variable === "object" && variable !== null;
      }
      if (isObject(state.updatingStudent)) {
        if (!isObject(action.payload)) {
          state.updatingStudent = "";
          return;
        }
        let index = state.students.findIndex(
          (obj) => obj._id === action.payload._id
        );
        if (index !== -1) {
          state.students.splice(index, 1, action.payload);
        }
        state.updatingStudent = "";
        return;
      }
      state.updatingStudent = action.payload;
    },
    fetchStudent: (state, action) => {
      state.students = action.payload;
    },
  },
});

export const {
  addStudent,
  showStudent,
  deleteStudent,
  fetchStudent,
  updateStudent,
} = studentsSlice.actions;

export default studentsSlice.reducer;
