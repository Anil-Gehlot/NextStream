import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos(params) {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const json = await response.json();
    setVideos(json.items);
  }

  return videos.length === 0 ? (

    // Applying Shimmer UI while videos are getting fetched.
    <div className="flex justify-center flex-wrap absolute gap-6 pt-2 ">
      {[...Array(30)].map((_, index) => (
        <div
          key={index}
          className="w-60 h-40 bg-gray-200 animate-pulse rounded-lg"
        ></div>
      ))}
    </div>
  ) : (

    // showing videos.
    <div className="flex justify-center flex-wrap absolute gap-6 pt-2">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
