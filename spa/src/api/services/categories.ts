import { AxiosResponse } from "axios";
import { NewCategory } from "../../features/services/serviceSlice";
import { axiosInstance } from "../axiosInstance";

export const listCategoriesApi = async (): Promise<AxiosResponse> => {
  const req = await axiosInstance.get(`/services/category`);
  return req;
};

export const createCategoryApi = async (
  data: NewCategory
): Promise<AxiosResponse> => {
  const req = await axiosInstance.post(`/services/category`, data);
  return req;
};
