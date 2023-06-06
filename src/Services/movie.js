import api from "../Helper/Api";

export const getMovies = async (params = "") => {
  const config = {
    headers: {
      Authorization: `Bearer <your_token_here>`,
    },
  };

  const res = await api.get(`users?${params}`, config);
  return res;
};
