import React from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/hamburgerSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoPreview from "./VideoPreview";

const WatchPage = () => {
  // to always open the sidebar when watch page is opened./
  const dispatch = useDispatch();
  dispatch(closeMenu());

  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  return (
    <>
      <div className="md:flex md:flex-wrap md:justify-center md:w-full mx-4 mt-4">
        <VideoPreview videoId={videoId} />
        <div className="hidden md:block w-1/4  rounded-xl border h-[30rem] shadow-sm">
          <p className="border-b p-2">Live Chat</p>
          <div className="bg-gray-50">
            <LiveChat />
          </div>
        </div>
      </div>

      {/* {Here I was rendering the commentsContainer.js} */}
    </>
  );
};

export default WatchPage;
