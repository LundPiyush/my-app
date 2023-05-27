import axios from "axios";

export const getProduct = async (productId) => {
  try {
    const { data, status } = await axios.get(`/api/products/${productId}`);
    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
