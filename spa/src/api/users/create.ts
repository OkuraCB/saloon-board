import { AxiosResponse } from "axios";
import { NewPartner } from "../../features/partners/partnersSlice";
import { axiosInstance } from "../axiosInstance";

export const createPartnerApi = async (
  data: NewPartner
): Promise<AxiosResponse> => {
  const req = await axiosInstance.post(`/auth/signup`, data);
  return req;
};
