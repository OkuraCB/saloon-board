import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listPartnersApi } from "../../api/partners/list";
import { RootState } from "../../app/store";

interface Partner {
  partnerName: string;
  partnerEmail: string;
  serviceName: string;
  time: number;
  price: number;
}

interface IInitial {
  partners: Partner[];
  status: string;
}

const initialState: IInitial = {
  partners: [],
  status: "idle",
};

export const listPartners = createAsyncThunk(
  "partners/listPartners",
  async (id: number) => {
    const res = await listPartnersApi(id);
    return res.data;
  }
);

export const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listPartners.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(listPartners.pending, (state) => {
        state.status = "pending";
      })
      .addCase(listPartners.fulfilled, (state, { payload }: any) => {
        state.status = "idle";

        const flat = payload.flatMap(({ services, ...partner }: any) =>
          services.map((s: any) => {
            const data = {
              partnerName: partner.name,
              partnerEmail: partner.email,
              serviceName: s.name,
              time: s.time,
              price: s.price,
            };

            return data;
          })
        );

        state.partners = flat;
      });
  },
});

export const selectPartners = (state: RootState) => state.partners.partners;

export default partnersSlice.reducer;
