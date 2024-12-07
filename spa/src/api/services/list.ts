import { AxiosResponse } from "axios";
import { axiosInstance } from "../axiosInstance";

export const listServicesApi = async (): Promise<AxiosResponse> => {
  const req = await axiosInstance.get(`/services/`);
  return req;
};
