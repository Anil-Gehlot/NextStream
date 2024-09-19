import React from "react";

import moment from "moment";
import { formatViews } from "../utils/constant";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="space-y-2 p-1 rounded-lg w-[19.5rem]">
      <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className="rounded-xl w-full"
      />

      <div className="flex flex-col px-2 ">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 font-medium">{channelTitle}</p>
        <div className=" text-sm text-gray-500 font-medium">
          <p>
            {formatViews(statistics.viewCount)} views •{" "}
            {moment(publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

//{moment(publishedAt).fromNow()} is a method that displays the time difference between a published date and the current date in a human-readable format.
