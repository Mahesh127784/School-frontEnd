import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./features/students/studentsSlice";
import teachersReducer from "./features/teachers/teachersSlice";
import adminsReducer from "./features/admins/adminsSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    teachers: teachersReducer,
    admins: adminsReducer,
    user: userReducer,
  },
});
