import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="p-3 flex items-center shadow-sm rounded-lg">
      <img
        className="h-8 mr-2"
        alt="user-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdVa15Lja2H6l8iNgOm09QYcUjUmHfrsfLk3Wv4VYyn7i0StdA5GKofgYVRmZNPxak7k&usqp=CAU"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
