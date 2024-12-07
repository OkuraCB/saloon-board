import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listPartnersApi } from "../../api/partners/list";
import { createPartnerApi } from "../../api/users/create";
import { RootState } from "../../app/store";

export interface NewPartner {
  saloonId: number;
  name: string;
  email: string;
  password: string;
  services: Array<number>;
}

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

export const createPartner = createAsyncThunk(
  "partners/createPartner",
  async (data: NewPartner) => {
    const res = await createPartnerApi(data);
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

    builder
      .addCase(createPartner.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(createPartner.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createPartner.fulfilled, (state) => {
        state.status = "idle";
      });
  },
});

export const selectPartners = (state: RootState) => state.partners.partners;

export default partnersSlice.reducer;
