import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/hamburgerSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();


  // Applying debouncing ......
  useEffect(() => {
    // more optimised...
    // here we are performing debouncing if char deleted then dont make api calls....

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getYoutubeSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);


  {/* In this code i was performing debouncing to make an api call after every key stroke.....
    but if the difference b/w 2 api calls is < 200ms...decline the call......
    
    The above code is more optimised bcoz i have applied caching also.......
    */}

  // useEffect(() => {
  //   const timer = setTimeout(() => getYoutubeSuggestion(), 200);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchQuery]);

  const getYoutubeSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  // const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    // code for hamburger and logo.
    <div className="grid grid-flow-col p-3 my-2 shadow-md ">
      <div className="flex col-span-1 ">
        <button onClick={() => handleToggleMenu()} className="border border-gray-950 rounded-md">
          <AiOutlineMenu className="mx-4 text-xl " />
        </button>

        <img
          className="h-8 ml-11 invisible sm:visible md:visible scale-150 cursor-pointer"
          alt="youtube-logo"
          src="nexstream-logo.png"
          onClick={()=>navigate("/")}
        />
      </div>

      <div className="col-span-10 sm:ml-[20%]  ">
        <div className="">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 md:w-96 sm: outline-blue-400 bg-gray-100 border border-gray-400 rounded-l-full p-1 px-5"
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate("/result?search_query=" + e.target.value);
                const filteredSuggestions = suggestions.filter(
                  (s) => s === e.target.value
                );
                setSuggestions(filteredSuggestions);
              }
            }}
          />

          {/* search button code */}
          <button
            className="border border-gray-400 bg-gray-100 px-5 p-1 rounded-r-full "
            onClick={(e) => {
              navigate("/result?search_query=" + searchQuery);
              const filteredSuggestions = suggestions.filter(
                (s) => s === searchQuery
              );
              setSuggestions(filteredSuggestions);
            }}
          >
            🔍
          </button>
        </div>

        {/* showing suggestion on searching.. */}
        {showSuggestions > 0 && suggestions.length > 0 && (
          <div className="absolute z-10 py-2 px-2 w-96 bg-white shadow-lg rounded-lg border border-gray-100 overflow-x-hidden ">
            <ul>
              {suggestions.map((suggestion, index) => (
                <Link
                  key={index}
                  to={"/result?search_query=" + suggestion}
                  onClick={() => {
                    setShowSuggestions(false);
                    setSearchQuery(suggestion);
                  }}
                >
                  <li className="shadow-sm px-3 py-2 hover:bg-gray-100">
                    🔍 {suggestion}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

        {/* user icon */}
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdVa15Lja2H6l8iNgOm09QYcUjUmHfrsfLk3Wv4VYyn7i0StdA5GKofgYVRmZNPxak7k&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;

// LIne no. 93
// The <Link> component from react-router-dom is a React component that needs to be used in the render output,
// not inside event handlers.
//                             Instead, you should programmatically navigate using the useNavigate hook provided by react-router-dom.
// This hook allows you to perform navigation programmatically in response to events or actions.
