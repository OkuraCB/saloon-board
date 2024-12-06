import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Base {
  id: number;
  name: string;
  email: string;
  role: string;
  saloonId: number;
}

export interface User extends Base {
  logged: boolean;
}

const initialState: User = {
  id: 0,
  name: "",
  email: "",
  role: "USER",
  logged: false,
  saloonId: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Base>) => {
      const { id, name, email, role, saloonId } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.logged = true;
      state.role = role;
      state.saloonId = saloonId;
    },
    logout: (state) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.email = initialState.email;
      state.logged = initialState.logged;
      state.role = initialState.role;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
