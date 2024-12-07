import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listServicesApi } from "../../api/services/list";
import { RootState } from "../../app/store";
import { User } from "../users/usersSlice";

export interface ServiceCategory {
  id: number;
  name: string;
}

export interface Service {
  id: number;
  name: string;
  time: number;
  price: number;
  category: ServiceCategory;
  partners: User[];
}

interface IInitial {
  services: Service[];
  status: string;
}

const initialState: IInitial = {
  services: [],
  status: "idle",
};

export const listServices = createAsyncThunk(
  "services/listServices",
  async () => {
    const res = await listServicesApi();
    return res.data;
  }
);

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listServices.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(listServices.pending, (state) => {
        state.status = "pending";
      })
      .addCase(listServices.fulfilled, (state, { payload }: any) => {
        state.status = "idle";
        state.services = payload;
      });
  },
});

export const selectServices = (state: RootState) => state.services.services;

export default servicesSlice.reducer;
