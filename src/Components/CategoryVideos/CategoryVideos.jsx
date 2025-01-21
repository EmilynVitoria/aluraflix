import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import { CategoryTitle, VideoList, VideoCard, VideoContainer } from "./CategoryVideos.styled";

const CategoryVideos = ({ onEdit }) => {
  const { videoCategory,  deleteVideo } = useVideoContext();

  return (
    <div>
      {Object.keys(videoCategory).map((category) => (
        <div key={category}>
          <VideoContainer>
            <CategoryTitle $category={category}>{category}</CategoryTitle>
            <VideoList $category={category}>
              {videoCategory[category].map((video) => (
                <VideoCard key={video.id} $category={category}>
                <Card 
                video={video} 
                onDelete={() => deleteVideo(video.id)} 
                onEdit={onEdit}
              />
              </VideoCard>
              ))}
            </VideoList>
          </VideoContainer>
        </div>
      ))}
    </div>
  );
};

export default CategoryVideos;
