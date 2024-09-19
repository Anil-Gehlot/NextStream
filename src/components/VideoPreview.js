import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constant";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";

const VideoPreview = ({ videoId }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, [videoId]);

  const getVideo = async () => {
    const data = await fetch(VIDEO_API + videoId);
    const json = await data.json();
    setVideo(json.items[0]);
  };

  return video.length === 0 ? (
    // Applying shimmer UI.
    <div className="flex flex-col md:w-3/5 md:mr-3 mb-4">
      <div>
        <iframe
          className="md:h-[40rem] h-60 w-full rounded-lg bg-gray-200"
          title="YouTube Player Shimemr UI"
        ></iframe>
      </div>
    </div>
  ) : (
    // Showing video.
    <div className="flex flex-col md:w-3/5 md:mr-3 mb-4">
      <div>
        <iframe
          className="md:h-[40rem] h-60 w-full rounded-lg"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <VideoInfo info={video} />
      </div>
      <Comments videoId={videoId} />
    </div>
  );
};

export default VideoPreview;
