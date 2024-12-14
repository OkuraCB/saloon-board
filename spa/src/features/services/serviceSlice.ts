import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCategoryApi,
  listCategoriesApi,
} from "../../api/services/categories";
import { createServiceApi } from "../../api/services/create";
import { listServicesApi } from "../../api/services/list";
import { RootState } from "../../app/store";
import { User } from "../users/usersSlice";

export interface ServiceCategory {
  id: number;
  name: string;
}

export interface NewCategory {
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

export interface NewService {
  name: string;
  time: number;
  price: number;
  category: string;
}

interface IInitial {
  services: Service[];
  categories: string[];
  status: string;
}

const initialState: IInitial = {
  services: [],
  categories: [],
  status: "idle",
};

export const listServices = createAsyncThunk(
  "services/listServices",
  async () => {
    const res = await listServicesApi();
    return res.data;
  }
);

export const createService = createAsyncThunk(
  "services/createService",
  async (data: NewService) => {
    const res = await createServiceApi(data);
    return res.data;
  }
);

export const listCategories = createAsyncThunk(
  "services/listCategories",
  async () => {
    const res = await listCategoriesApi();
    return res.data;
  }
);

export const createCategory = createAsyncThunk(
  "services/createCategory",
  async (data: NewCategory) => {
    const res = await createCategoryApi(data);
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

    builder
      .addCase(listCategories.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(listCategories.pending, (state) => {
        state.status = "pending";
      })
      .addCase(listCategories.fulfilled, (state, { payload }: any) => {
        state.status = "idle";
        state.categories = payload.map((option: any) => option.name);
      });

    builder
      .addCase(createService.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(createService.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createService.fulfilled, (state, { payload }: any) => {
        state.status = "idle";
        state.services.push(payload);
      });

    builder
      .addCase(createCategory.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(createCategory.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createCategory.fulfilled, (state, { payload }: any) => {
        state.status = "idle";
        state.categories.push(payload);
      });
  },
});

export const selectServices = (state: RootState) => state.services.services;
export const selectCategories = (state: RootState) => state.services.categories;

export default servicesSlice.reducer;
