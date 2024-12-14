import { AxiosResponse } from "axios";
import { NewService } from "../../features/services/serviceSlice";
import { axiosInstance } from "../axiosInstance";

export const createServiceApi = async (
  data: NewService
): Promise<AxiosResponse> => {
  const req = await axiosInstance.post(`/services`, data);
  return req;
};
