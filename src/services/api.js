import config from "next/config";
import { create } from "apisauce";

const api = create({
  baseURL: config().publicRuntimeConfig.apiUrl,
});

export const getProductApi = async () => api.get("/home");

export default api;
