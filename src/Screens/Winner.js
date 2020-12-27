import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
const Winner = ({ names, setNames }) => {
  const handleWinner = () => {
    if (names.length > 0) {
      const r = Math.floor(Math.random() * names.length);
      const w = names[r];
      if (w) {
        setNames(names.filter((m) => m !== w));
        return w;
      } else {
        handleWinner();
      }
    }
  };
  const [winner, setWinner] = useState(handleWinner);
  const [isTime, setisTime] = useState(false);

  setTimeout(() => {
    setisTime(true);
  }, 4000);

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
            <span style={{ color: "#06a6ff" }}>{winner} </span>
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
