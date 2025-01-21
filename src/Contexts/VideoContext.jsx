import { createContext, useContext, useEffect, useState } from "react";
import {
  getVideos,
  saveVideo as addVideoService,
  deleteVideo as deleteVideoService,
  updateVideo as updateVideoService,
} from "../Services/api";

const VideosContext = createContext();

export const useVideoContext = () => {
  return useContext(VideosContext);
};

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const onSave = async (formData, videoId) => {
    try {
      await updateVideo(formData, videoId); // Passa o ID do vídeo e os dados atualizados
      // Outras ações após salvar, se necessário
    } catch (error) {
      console.error("Erro ao salvar vídeo", error);
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const videoData = await getVideos();
        setVideos(videoData);
      } catch (error) {
        console.error("Error ao buscar vídeos", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const addVideo = async (newVideo) => {
    try {
      const addedVideo = await addVideoService(newVideo);
      setVideos((prevVideos) => [...prevVideos, addedVideo]);
    } catch (error) {
      console.error("Erro ao adicionar vídeo", error);
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      await deleteVideoService(videoId);
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== videoId)
      );
    } catch (error) {
      console.error("Erro ao deletar video", error);
    }
  };

  

  const updateVideo = async (updatedVideo, videoId) => {
    try {
      setError(null);
      const updatedData = await updateVideoService(updatedVideo, videoId);
      

      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoId ? { ...video, ...updatedData } : video
        )
      );

      setMessage("Vídeo atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar vídeo", error);
      setError("Não foi possível atualizar o vídeo. Tente novamente.");
      setMessage("");  // Limpar a mensagem em caso de erro
    }
  };

  const videoCategory = {};

  videos.forEach((video) => {
    const category = video.categoria;
    if (!videoCategory[category]) {
      videoCategory[category] = [];
    }
    videoCategory[category].push(video);
  });

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        error,
        videoCategory,
        message,
        setMessage,
        addVideo,
        deleteVideo,
        updateVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContext;
