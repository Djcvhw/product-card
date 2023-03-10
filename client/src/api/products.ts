import axios from "axios";

export const productsApi = axios.create({ baseURL: '/api' });

const getProduct = async (id: string) => {

  try {
    const response = await productsApi.get(`/products/${id}`);

    return response.data;
    
  } catch (e) {
    return e;
  }
};

const points = {
  getProduct
}

export default points;
