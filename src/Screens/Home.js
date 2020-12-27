import "../App.css";
import logo from "../assets/cse.png";
import { Link } from "react-router-dom";
const Home = ({ names, setNames }) => {
  const handleFile = (e) => {
    const fr = new FileReader();
    fr.onload = () => {
      const newNames = fr.result.split("\n").filter((m) => m.length > 2);
      console.log(newNames);
      setNames(newNames);
    };
    fr.readAsText(e.target.files[0]);
  };

  return (
    <div className="relative App w-full h-screen flex flex-col justify-start items-center py-10">
      <img src={logo} alt="logo" className="w-1/5" />
      <div className="flex flex-row justify-center items-center w-full ">
        <input
          type="file"
          accept=".txt"
          onChange={(e) => handleFile(e)}
          className="custom-file-input pl-14 p-2 rounded-lg blueBg shadow-2xl h-12 text-white"
        />
      </div>
      {names.length > 0 && (
        <div className="scroll flex flex-col justify-start items-center p-6 pb-12 w-full h-2/3 overflow-y-scroll">
          {names.map((n, idx) => (
            <div
              key={idx}
              className="text-lg text-white text-center shadow-2xl py-2"
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
      {!(names.length > 0) && (
        <div className=" text-white py-6 text-2x">
          Please upload a .txt file with all names
        </div>
      )}
      {names.length > 0 && (
        <Link
          to="/winner"
          className="cursor-pointer absolute text-white blueBg py-2 px-8 text-2xl rounded-3xl bottom-10 shadow-2xl"
        >
          Pick a Winner 🎉
        </Link>
      )}
      <footer className="text-white absolute bottom-1">
        Made with ❤️ by Club Scientifique de l'ESI
      </footer>
    </div>
  );
};

export default Home;
