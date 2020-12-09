import axios from "./axios";

export const searchTitles = async ({ params }) => {
  try {
    const { data } = await axios.get("", { params });
    return data;
  } catch (e) {
    console.error("Erro request: ", e);
    const error = {
      message: "Something went wrong while loading titles.",
    };
    throw error;
  }
};
