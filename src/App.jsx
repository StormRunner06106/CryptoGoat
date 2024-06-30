import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen bg-image relative" style={{ width: "100%" }}>
        <Header />
        <div
          className="w-full h-screen"
          style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
        >
          <div
            className="absolute top-80 left-60"
            style={{ maxWidth: "500px" }}
          >
            <span className="text-7xl text-white font-bold">Crypto Goat</span>
            <p className="p-0 text-white mt-10">
              Blockchain conference bringing together the key players of crypto
              industry and experts to redefine the future of finance.
            </p>
            <button
              type="button"
              onClick={() => {}}
              className="bg-gradient-to-r from-pink-500 to-orange-300 text-white font-bold py-4 px-8 rounded mt-10 border-none"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
