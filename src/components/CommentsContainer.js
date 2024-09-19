import React from "react";
import { commentsData } from "../utils/constant";

const Comment = ({ data }) => {
  const { name, Comment, replies } = data;
  return (
    <div className="flex bg-gray-100 shadow-md p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdVa15Lja2H6l8iNgOm09QYcUjUmHfrsfLk3Wv4VYyn7i0StdA5GKofgYVRmZNPxak7k&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold ">{name}</p>
        <p>{Comment}</p>
      </div>
    </div>
  );
};

const CommentLists = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="border border-l-black ml-16 px-9 ">
        <CommentLists comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <Comment data={commentsData[0]} />
      <CommentLists comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

{
  /*
    This Components is not used in the project currently .....
    i was showing nested comments by this component in the previous version of this project.
  */
}