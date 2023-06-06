import api from "../Helper/Api";

export const getUser = async (params = "") => {
  const res = await api.get(`users?${params}`);
  return res;
};
