import axios from "axios";
export const getMainProducts = async () => {
  const dataURL = "https://api.escuelajs.co/api/v1/products";
  try {
    const { data } = await axios.get(dataURL);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
