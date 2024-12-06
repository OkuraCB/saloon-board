import { AxiosResponse } from "axios";
import { axiosInstance } from "../axiosInstance";

export const listPartnersApi = async (id: number): Promise<AxiosResponse> => {
  const req = await axiosInstance.get(`/users/all/${id}`);
  return req;
};
