import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  listPendingScheduledApi,
  listScheduledApi,
} from "../../api/scheduled/list";
import { RootState } from "../../app/store";
import { Saloon } from "../saloon/saloonSlice";
import { Service } from "../services/serviceSlice";

export interface Scheduled {
  id: number;
  active: Boolean;
  authorName: string;
  authorNumber: string;
  startTime: Date;
  endTime: Date;
  pending: boolean;
  service: Service;
  Saloon: Saloon;
}

interface IInitial {
  scheduled: Scheduled[];
  pending: Scheduled[];
  status: string;
}

const initialState: IInitial = {
  scheduled: [],
  pending: [],
  status: "idle",
};

export const listScheduled = createAsyncThunk(
  "scheduled/listScheduled",
  async (id: number) => {
    const res = await listScheduledApi(id);
    return res.data;
  }
);

export const listPendingScheduled = createAsyncThunk(
  "scheduled/listPendingScheduled",
  async (id: number) => {
    const res = await listPendingScheduledApi(id);
    return res.data;
  }
);

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listScheduled.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(listScheduled.pending, (state) => {
        state.status = "pending";
      })
      .addCase(listScheduled.fulfilled, (state, { payload }: any) => {
        state.status = "idle";
        state.scheduled = payload;
      });

    builder
      .addCase(listPendingScheduled.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(listPendingScheduled.pending, (state) => {
        state.status = "pending";
      })
      .addCase(listPendingScheduled.fulfilled, (state, { payload }: any) => {
        state.status = "idle";
        state.pending = payload;
      });
  },
});

export const selectScheduled = (state: RootState) => state.scheduled.scheduled;
export const selectPending = (state: RootState) => state.scheduled.pending;

export default scheduleSlice.reducer;
