const ResultPageShimmer = () => {
  return (
    <div className="flex-col mx-3 w-fit h-full flex flex-wrap justify-center mt-5">
      <div className="flex h-60  rounded-md overflow-hidden ">
        <div className="bg-gray-100  rounded-xl md:w-72 w-52  h-44"></div>
        <div className="flex">
          <div>
            <div className="bg-gray-100 mt-3 ml-3 rounded-xl w-32 md:w-60 h-5"></div>
            <div className="bg-gray-100 mt-5 ml-3 rounded-xl w-32 md:w-60 h-5"></div>
            <div className="bg-gray-100 mt-3 ml-3 rounded-xl w-32 md:w-[40rem] h-4"></div>
            <div className="bg-gray-100 mt-3 ml-3 rounded-xl w-32 md:w-[40rem] h-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPageShimmer;
