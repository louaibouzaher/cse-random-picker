import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Link, useLocation } from "react-router-dom";
const Winner = () => {
  const l = useLocation();
  const [isTime, setisTime] = useState(false);
  setTimeout(() => {
    setisTime(true);
  }, 5000);
  return (
    <div className="relative App w-full h-screen flex flex-col justify-center items-center py-10">
      {!isTime && (
        <div className="flex flex-col justify-center items-center">
          <div className="text-white text-2xl my-8 font-bold">
            And the Winner is...🥁🥁🥁
          </div>
          <BeatLoader size={50} color={"#06a6ff"} />
        </div>
      )}
      {isTime && (
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl text-white font-bold text-center">
            Congratulations 🥳!! <br />
            <span style={{ color: "#06a6ff" }}>{l.state}</span>
          </div>
          <Link
            to="/"
            className="absolute yellowBg py-2 px-5 text-xl rounded-3xl bottom-10 shadow-2xl font-bold"
          >
            Go Back ⬅️
          </Link>
        </div>
      )}
      <footer className="text-white absolute bottom-1">
        Made with ❤️ by Club Scientifique de l'ESI
      </footer>
    </div>
  );
};
export default Winner;
