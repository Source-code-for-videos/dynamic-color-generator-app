import React, { useState } from "react";

const Rgb = () => {
  // dynamic rgb color generator
  const [color, setColor] = useState("rgb(303,34,585)");
  const [isCopied, setIsCopied] = useState(false);

  const generateColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };

  // copy to clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div
      className={`w-full min-h-[80vh] flex items-center justify-center flex-col gap-16`}>
      <h1 className="text-[3rem] text-gray-900 relative">
        The Rgb Color code is:{" "}
        <span
          className="font-bold cursor-pointer"
          onClick={handleCopyToClipboard}>
          {color}
        </span>
        <p
          className={`${
            isCopied ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
          } bg-[#000] text-white rounded-lg absolute top-[-50%] right-0 text-[0.9rem] px-4 py-2 transition-all duration-300`}>
          Code Copied!
        </p>
      </h1>

      <button
        className="px-6 py-3 bg-blue-700 text-white rounded-lg"
        onClick={generateColor}>
        Generate Color
      </button>
    </div>
  );
};

export default Rgb;
