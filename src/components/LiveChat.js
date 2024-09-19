import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSLice";
import { generateRandomCompliment, generateRandomName } from "../utils/helper";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMesages = useSelector((store) => store.chat.messages);

  // API polling : to fetch real time data in specific time interval.
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("Fetching data through API polling....");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomCompliment(),
        })
      );
    }, 900);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="box-border overflow-y-scroll flex flex-col-reverse h-96 rounded-lg">
        {chatMesages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full py-2 "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Unknown",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      > 
        <div className="bg-white flex gap-2 rounded-xl  items-center mx-2 ">
          <FaUserCircle className="md:text-4xl " />
          <input
            className="outline-none border-b-2 w-full border-blue-200 "
            placeholder="Enter Your comments....."
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />

          <button type="submit" className="bg-none border-none">
            <AiOutlineSend className="w-12 h-6 cursor-pointer" />
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
