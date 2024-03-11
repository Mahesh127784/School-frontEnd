import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admissionFormsData: [],
  admins: [],
  updatingAdmin: "",
  admin: false,
};

export const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    setApplication: (state, action) => {
      state.admissionFormsData.push(action.payload);
    },
    showAdmin: (state, action) => {
      state.admin = action.payload;
    },
    addAdmin: (state, action) => {
      state.admins.push(action.payload);
    },
    deleteAdmin: (state, action) => {
      state.admins = state.admins.filter(
        (admin) => admin._id !== action.payload
      );
    },
    updateAdmin: (state, action) => {
      function isObject(variable) {
        return typeof variable === "object" && variable !== null;
      }
      if (isObject(state.updatingAdmin)) {
        if (!isObject(action.payload)) {
          state.updatingAdmin = "";
          return;
        }
        let index = state.admins.findIndex(
          (obj) => obj._id === action.payload._id
        );
        if (index !== -1) {
          state.admins.splice(index, 1, action.payload);
        }
        state.updatingAdmin = "";
        return;
      }
      state.updatingAdmin = action.payload;
    },
    fetchAdmin: (state, action) => {
      state.admins = action.payload;
    },
  },
});

export const {
  setApplication,
  addAdmin,
  showAdmin,
  deleteAdmin,
  fetchAdmin,
  updateAdmin,
} = adminsSlice.actions;

export default adminsSlice.reducer;
