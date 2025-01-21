import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/EmilynVitoria/aluraflixapi",
});

export const getVideos = async () => {
  try {
    const response = await api.get("/video");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar videos", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};

export const saveVideo = async (video) => {
  try {
    const response = await api.post("/video", video);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar videos", error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/video/${videoId}`);
    return response.data;
  } catch (error) {
    console.error("Error ao deletar vídeo", error);
    throw error;
  }
};

export const updateVideo = async (videoData, videoId) => {
  try {
    const url = `/video/${videoId}`;
    const res = await api.put(url, videoData);
    return res.data;
  }
  catch (erro) {
    console.error("Erro ao atualizar vídeo", erro);
    return erro;
  }
};

export default api;
