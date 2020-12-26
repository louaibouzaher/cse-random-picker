import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/cse.png";
import { Link } from "react-router-dom";
function Home({ namesP, setNamesP }) {
  const [file, setfile] = useState(null);
  const [winner, setWinner] = useState("");

  const handleFile = (e) => {
    setfile(e.target.files[0]);
    console.log(e.target.files[0]);
    const fr = new FileReader();
    fr.onload = () => {
      const newNames = fr.result.split("\n");
      setNamesP(newNames);
    };
    fr.readAsText(e.target.files[0]);
  };
  const handleWinner = () => {
    if (namesP.length > 0) {
      const r = Math.floor(Math.random() * namesP.length);
      setWinner(namesP[r]);
    }
  };
  useEffect(() => {
    handleWinner();
  }, [namesP]);

  return (
    <div className="relative App w-full h-screen flex flex-col justify-start items-center py-10">
      <img src={logo} alt="logo" className="w-1/5" />
      <div className="flex flex-row justify-center items-center w-full">
        <input
          type="file"
          accept=".txt"
          onChange={(e) => handleFile(e)}
          className="custom-file-input pl-16 rounded-lg blueBg shadow-2xl"
        />
      </div>
      {namesP.length > 0 && (
        <div className="scroll flex flex-col justify-center items-center mt-6 w-full h-2/3 overflow-y-scroll">
          {namesP.map((n, idx) => (
            <div
              key={idx}
              className="w-14 text-lg text-white text-center py-2 shadow-2xl"
              style={{
                color:
                  idx % 3 === 0
                    ? "#06a6ff"
                    : idx % 3 === 1
                    ? "#FFFFFF"
                    : "#FCF300",

                backgroundColor: "#060f1F",
              }}
            >
              {n}
            </div>
          ))}
        </div>
      )}
      {!(namesP.length > 0) && (
        <div className=" text-white py-6 text-2x">
          Please upload a .txt file with all names
        </div>
      )}
      {namesP.length > 0 && (
        <Link
          to={{
            pathname: "/winner",
            state: winner,
          }}
          className="cursor-pointer absolute text-white blueBg py-2 px-5 text-2xl rounded-3xl bottom-10 shadow-2xl"
        >
          Pick a Winner 🎉
        </Link>
      )}
      <footer className="text-white absolute bottom-1">
        Made with ❤️ by Club Scientifique de l'ESI
      </footer>
    </div>
  );
}

export default Home;
