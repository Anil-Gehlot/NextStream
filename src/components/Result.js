import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_API } from "../utils/constant";
import { Link } from "react-router-dom";
import ResultVideoCard from "./ResultVideoCard";
import ResultPageShimmer from "./ResultPageShimmer";

const Result = () => {
  const [param] = useSearchParams();
  const searchQuery = param.get("search_query");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getvideos();

    return () => {};
  }, [searchQuery]);

  async function getvideos() {
    setVideos([]);
    const data = await fetch(SEARCH_RESULT_API + searchQuery);
    const json = await data.json();
    // console.log(json)
    const filterOnlyVideos = json.items.filter((video) => {
      return video.id.kind === "youtube#video";
    });

    setVideos(filterOnlyVideos);
  }

  
  if (!videos) {
    return (
      <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
        <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
          Oops! looks like we have exceeded youtube API quota
        </div>
      </div>
    );
  }

  return videos.length === 0 ? (
    <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
      {[...Array(14)].map((_, index) => (
        <ResultPageShimmer key={index} />
      ))}
    </div>
  ) : (
    <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
      {/* <ResultPageShimmer  /> */}
      {videos.map((video) => {
        return (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <ResultVideoCard key={video.id.videoId} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default Result;
