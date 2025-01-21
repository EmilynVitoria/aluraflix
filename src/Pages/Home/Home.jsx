import React, { useState, useEffect } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import CategoryVideos from "../../Components/CategoryVideos/CategoryVideos";
import Banner from "../../Components/Banner/Banner";
import Modal from "../../Components/Modal/Modal";
import { Main } from "./Home.styled";
import { SuccessMessage } from "./Home.styled";

const Home = () => {
  const { videos, updateVideo, message, setMessage} = useVideoContext();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleDeleteVideo = async (videoId) => {
    try {
      await deleteVideoService(videoId);
    } catch (error) {
      console.error("Erro ao deletar vídeo", error);
    }
  };

  const handleSaveVideo = async (updatedVideo, videoId) => {
    await updateVideo(updatedVideo, videoId);
    setSelectedVideo(null);
    setRefresh((prev) => !prev);
  };

 

  const handleEditClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Limpar a mensagem após 3 segundos
      }, 3000);
      return () => clearTimeout(timer); // Limpar o timer ao desmontar
    }
  }, [message, setMessage]);

  return (
    <>
      <div>
        {message && <SuccessMessage>{message}</SuccessMessage>}
        <Main>
          {videos.length > 0 && <Banner video={videos[0]} />}
          <CategoryVideos onEdit={handleEditClick} />
        </Main>
      </div>
      {selectedVideo && (
        <Modal
          key={refresh}
          video={selectedVideo}
          isOpen={!!selectedVideo}
          onClose={handleCloseModal}
          onSave={handleSaveVideo}
        />
      )}
    </>
  );
};

export default Home;
