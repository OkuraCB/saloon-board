import { AxiosResponse } from "axios";
import { axiosInstance } from "../axiosInstance";

export const listPendingScheduledApi = async (
  id: number
): Promise<AxiosResponse> => {
  const req = await axiosInstance.get(`/schedule/pending/${id}`);
  return req;
};

export const listScheduledApi = async (id: number): Promise<AxiosResponse> => {
  const req = await axiosInstance.get(`/schedule/${id}`);
  return req;
};
