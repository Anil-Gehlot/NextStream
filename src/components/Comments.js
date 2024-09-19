import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constant";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + videoId);
    const json = await data.json();
    setComments(json.items);
  };

  useEffect(() => {
    getComments();
  }, [videoId]);

  return (
    <div>
      <p className="font-bold">{comments?.length} Comments</p>

      {comments?.map((comment) => {
        
        const {
          authorDisplayName,
          authorProfileImageUrl,
          textDisplay,
          likeCount,
        } = comment?.snippet?.topLevelComment?.snippet;

        return (
          <div key={comment?.id} className="flex gap-4 my-4">
            <img
              src={authorProfileImageUrl}
              alt="author"
              className="rounded-full h-10"
            />
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <h3 className="text-md font-semibold text-gray-700">
                  {authorDisplayName}
                </h3>
              </div>
              <p>{textDisplay}</p>
              <div className="flex items-center gap-2">
                <AiOutlineLike />
                {likeCount}
                <AiOutlineDislike />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
