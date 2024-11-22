import React, { useState, useEffect, useRef } from "react";
import { FaArrowsAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TimelineSlider = ({ snapshots }) => {
  const containerStyle = `
   w-full 
   max-w-6xl 
   mx-auto
   p-6 
   pb-2
   pt-4
   bg-gray-50
   border
   border-teal-300
   rounded-sm
   m-5
  `;

  const sliderStyle = `
    w-full
    h-2 
    bg-teal-500 
    rounded-sm 
    appearance-none 
    cursor-pointer 
    focus:outline-none 
    focus:ring-2 
    focus:ring-teal-700 
    transition duration-300
  `;

  const iframeStyle = `
    w-full
    h-100
    max-w-3xl
    rounded-sm
    shadow-sm
    transition-opacity
    duration-300
    border
    border-teal-300
    bg-white
  `;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef(null);

  const handleChange = (event) => {
    setLoading(true);
    setSelectedIndex(Number(event.target.value));
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft" && selectedIndex > 0) {
      prevSnapshot();
    } else if (
      event.key === "ArrowRight" &&
      selectedIndex < snapshots.length - 1
    ) {
      nextSnapshot();
    } else if (event.key === "f" || event.key === "F") {
      toggleFullscreen();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, snapshots.length]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (iframeRef.current) {
      iframeRef.current.requestFullscreen();
    }
  };

  const prevSnapshot = () => {
    setLoading(true);
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? snapshots.length - 1 : prevIndex - 1
    );
  };

  const nextSnapshot = () => {
    setLoading(true);
    setSelectedIndex((prevIndex) => (prevIndex + 1) % snapshots.length);
  };

  const ActionButton = ({ onClick, disabled, position, children }) => (
    <button
      onClick={onClick}
      className={`absolute ${position} m-2 p-2 text-white rounded-full shadow-sm transition duration-300 ${
        disabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-teal-500 hover:bg-teal-600"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );

  return (
    <div className={containerStyle}>
      <div className="relative mb-4">
        <input
          type="range"
          min="0"
          max={snapshots.length - 1}
          value={selectedIndex}
          onChange={handleChange}
          className={sliderStyle}
        />
      </div>
      <div className="relative mt-6 p-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-center">
          Snapshot From{" "}
          <span className="text-teal-700 inline">
            {snapshots[selectedIndex]?.date}
          </span>
        </h3>
        <div className="mt-1 text-center">
          <p>
            <strong>Description:</strong>{" "}
            {snapshots[selectedIndex]?.description ||
              "No Description Available!"}
          </p>
        </div>

        {loading ? (
          <div className="mt-4 text-center text-gray-500">
            Loading Snapshot...
          </div>
        ) : (
          <div className="relative mt-4 flex justify-center items-center">
            <ActionButton
              onClick={prevSnapshot}
              disabled={selectedIndex === 0}
              position="left-0"
            >
              <FaArrowLeft />
            </ActionButton>
            <iframe
              ref={iframeRef}
              src={snapshots[selectedIndex]?.url}
              onLoad={() => setLoading(false)}
              className={`${iframeStyle} ${loading ? "hidden" : "block"}`}
            />
            <ActionButton
              onClick={nextSnapshot}
              disabled={selectedIndex === snapshots.length - 1}
              position="right-0"
            >
              <FaArrowRight />
            </ActionButton>
            <ActionButton onClick={toggleFullscreen} position="top-0 right-0">
              <FaArrowsAlt />
            </ActionButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineSlider;
