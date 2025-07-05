"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Component() {
  const [noBtnPos, setNoBtnPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [toHidden, setToHidden] = useState(0);
  const navigate = useNavigate();

  // Hàm random vị trí cho nút "Không"
  const moveNoBtn = () => {
    const container = document.getElementById("btn-container");
    if (container) {
      const xTop = window.innerWidth < 640 ? 300 : 250;
      const yTop = window.innerWidth < 640 ? 500 : 500;
      const zTop = window.innerWidth < 640 ? 500 : 500;
      const xLeft = window.innerWidth < 640 ? 300 : 900;
      const yLeft = window.innerWidth < 640 ? 60 : 500;
      const zLeft = window.innerWidth < 640 ? 60 : 500;
      const top = Math.random() * (xTop - -yTop) + -zTop;
      const left = Math.random() * (xLeft - -yLeft) + -zLeft;
      setNoBtnPos({ top, left });
    }
  };

  const handleShowText = () => {
    setToHidden((prev) => (prev === 0 ? 1 : 0));
  };
  const handleAnswer = () => {
    navigate(`/dashboard`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4 overflow-hidden">
      <h1 className="absolute top-10 hidden sm:block text-base sm:text-2xl md:text-5xl font-semibold sm:font-extrabold text-white text-center bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-500 animate-pulse drop-shadow-lg">
        🎉 Chào mừng bạn đến với trò chơi đi tìm người khùm 🎯
      </h1>

      <div
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-[560px] text-center transform transition-all duration-500 hover:scale-105"
        id="container"
      >
        <div className="mb-8 w-full">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <img
              src="/images/z6773442471353_c7debe4f0eae88511bd3b0d90151eeae.jpg"
              alt="Thu giang"
              className="w-16 h-16 object-cover overflow-hidden rounded-full"
            />
          </div>
          <span className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">
            Nguyễn Thu Giang có bị khùm không
          </span>
          <p className="text-gray-600">Hãy cho chúng tôi biết hehehehe</p>
        </div>

        <div
          id="btn-container"
          className="flex gap-4 justify-center relative min-h-[80px] "
        >
          <button
            onClick={handleAnswer}
            className="w-12 h-12 items-center sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95 absolute top-0 right-0"
          >
            <span className="text-xl">✓</span>
            <div className="hidden sm:block text-lg">Có</div>
          </button>

          <button
            onClick={() => {
              moveNoBtn();
              handleShowText();
            }}
            onMouseEnter={moveNoBtn}
            style={{
              position: "absolute",
              top: noBtnPos.top,
              left: noBtnPos.left,
              transition: "top 1s ease, left 1s ease",
            }}
            className="w-12 h-12 items-center sm:w-24 sm:h-24 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
          >
            <span className="text-xl">✗</span>
            <div className="hidden sm:block text-lg">Không</div>
            <span
              className="absolute bottom-[-50px] left-[-100px] text-center text-nowrap text-black"
              style={{
                opacity: `${toHidden}`,
              }}
            >
              Nhấn không có được đâu đừng có cố 🤣
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
