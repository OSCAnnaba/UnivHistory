import React, { useEffect, useState } from "react";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const minScreenWidth = 1200;
  const [isWideScreen, setIsWideScreen] = useState(
    window.innerWidth > minScreenWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > minScreenWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {isWideScreen ? (
        <>
          <NavBar />
          <div className="content">
            <Home />
          </div>
        </>
      ) : (
        <div className="block text-center text-gray-500 m-5">
          <p>
            Your screen is too small to view this content. Please resize your
            window or view on a larger device
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
