import React, { useState } from "react";

const Hex = () => {
  // hex color code genenrator
  const [hexColor, setHexColor] = useState("#000");
  const [isCopied, setIsCopied] = useState(false);

  const hexColorGenerator = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const black = Math.floor(Math.random() * 255);

    const hexColor = `#${red.toString(16)}${green.toString(16)}${black.toString(
      16
    )}`;

    setHexColor(hexColor);
    document.body.style.background = hexColor;
  };

  // copy to clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(hexColor);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div
      className={`w-full min-h-[80vh] flex items-center justify-center flex-col gap-16`}>
      <h1 className="text-[3rem] text-gray-900 relative">
        The Hex Color code is:{" "}
        <span
          className="font-bold cursor-pointer"
          onClick={handleCopyToClipboard}>
          {hexColor}
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
        onClick={hexColorGenerator}>
        Generate Color
      </button>
    </div>
  );
};

export default Hex;
