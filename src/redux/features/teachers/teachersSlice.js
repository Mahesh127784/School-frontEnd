import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teachers: [],
  updatingTeacher: "",
  teacher: false,
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    showTeacher: (state, action) => {
      state.teacher = action.payload;
    },
    fetchTeacher: (state, action) => {
      state.teachers = action.payload;
    },
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
    updateTeacher: (state, action) => {
      function isObject(variable) {
        return typeof variable === "object" && variable !== null;
      }
      if (isObject(state.updatingTeacher)) {
        if (!isObject(action.payload)) {
          state.updatingTeacher = "";
          return;
        }
        let index = state.teachers.findIndex(
          (teacher) => teacher._id === action.payload._id
        );
        if (index !== -1) {
          state.teachers.splice(index, 1, action.payload);
        }
        state.updatingTeacher = "";
        return;
      }
      state.updatingTeacher = action.payload;
    },
    deleteTeacher: (state, action) => {
      state.teachers = state.teachers.filter(
        (teacher) => teacher._id !== action.payload
      );
    },
  },
});

export const {
  addTeacher,
  showTeacher,
  deleteTeacher,
  fetchTeacher,
  updateTeacher,
} = teachersSlice.actions;

export default teachersSlice.reducer;
