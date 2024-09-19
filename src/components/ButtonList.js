import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const list = [
  "All",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJs",
  "Tailwind",
  "Redux",
  "Bundlers",
  "Context API",
  "Live",
];

const BittonList = () => {
  return (
    <div className="hidden md:flex md:flex-wrap md:justify-center">
      {list.map((item, index) => (
        <Link key={index} to={"/result?search_query=" + item}>
          <Button name={item} />
        </Link>
      ))}
    </div>
  );
};

export default BittonList;
