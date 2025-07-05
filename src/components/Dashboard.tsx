"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

export default function Component() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const captureRef = useRef(null);

  const floatingImages = [
    "/images/z6773442471353_c7debe4f0eae88511bd3b0d90151eeae.jpg",
    "/images/z6774327746071_873a0c0ce27e29e20b7935538ce509ad.jpg",
    "/images/z6774328218649_a48fef54527c7cb5864bbbacfa2504c8.jpg",
    "/images/z6774328773447_bce97226f650b1c407f68bb9af79b3ec.jpg",
    "/images/z6774329421283_d33c2e37dcd6fc8a04e170051d0010f8.jpg",
    "/images/z6774329861860_3103d1ef77a9ad84caa85aed95f32279.jpg",
    "/images/z6774330717494_2e5fc5a68a577da7beef1d58c14c2a2f.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnimation(false);
      setTimeout(() => setShowAnimation(true), 100);
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  const generateFloatingImages = () => {
    return floatingImages.map((image, index) => ({
      id: index,
      src: image,
      left: Math.random() * 80 + 10,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 2,
      size: 120 + Math.random() * 40,
    }));
  };

  const [imageData] = useState(generateFloatingImages());

  const handleCapture = async () => {
    navigate("/Haha");
  };

  const handleDownload = () => {
    if (!capturedImage) return;
    const link = document.createElement("a");
    link.href = capturedImage;
    link.download = "ky-niem.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4 relative overflow-hidden">
      {showAnimation && (
        <div className="absolute inset-0 pointer-events-none z-[1]">
          {imageData.map((img) => (
            <div
              key={img.id}
              className="absolute rounded-full shadow-lg animate-pulse"
              style={{
                left: `${img.left}%`,
                bottom: "-160px",
                animation: `floatUp ${img.duration}s ${img.delay}s ease-out infinite`,
              }}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={`Floating image ${img.id + 1}`}
                className="rounded-full border-4 border-white shadow-xl"
                style={{
                  width: `${img.size}px`,
                  height: `${img.size}px`,
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div
        ref={captureRef}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center relative z-10 transform hover:scale-105 transition-all duration-300 z-[0]"
      >
        <div className="mb-6">
          <div className="text-6xl mb-4 animate-bounce">😂</div>
          <div className="flex justify-center space-x-2 text-3xl">
            <span className="animate-pulse">🤣</span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              😆
            </span>
            <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>
              😄
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent mb-6 animate-pulse">
          GIANG ĐÃ BỊ KHÙM! 🎯
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
          Chúc mừng! Bạn đã bị khùmkhùm! 🎉
        </h2>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="text-2xl">🎊</span> Sau bao nhiêu lần thoát được,
            cuối cùng Nguyễn Thu Giang cũng không thể chạy trốn nữa!
            <br />
            <span className="font-semibold text-orange-600">
              Chúc mừng bạn đã bị "khùm" thành công!
            </span>
            <span className="text-2xl">🎊</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-2xl p-4">
            <div className="text-2xl font-bold text-red-600">💥</div>
            <div className="text-sm text-red-500">Bị khùm</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-4">
            <div className="text-2xl font-bold text-yellow-600">🎯</div>
            <div className="text-sm text-yellow-500">Bị tẽn</div>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-4">
            <div className="text-2xl font-bold text-green-600">🏆</div>
            <div className="text-sm text-green-500">Chiến thắng</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleCapture}
            className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            Nhấn vào nút này là bị khùng
          </button>

          <Link
            to="/"
            className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <span className="mr-2">🎉</span>
            Chơi lại đi Tẽn
          </Link>
        </div>

        {/* 👇 Hiển thị ảnh chụp nếu có */}
        {capturedImage && (
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ảnh kỷ niệm của bạn
            </h3>
            <img
              src={capturedImage}
              alt="Preview"
              className="mx-auto rounded-2xl border-4 border-white shadow-lg max-w-full"
            />
            <button
              onClick={handleDownload}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition"
            >
              📥 Tải về
            </button>
          </div>
        )}

        <div className="mt-8 text-3xl space-x-2">
          <span
            className="inline-block animate-spin"
            style={{ animationDuration: "3s" }}
          >
            🎯
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.1s" }}
          >
            💥
          </span>
          <span
            className="inline-block animate-pulse"
            style={{ animationDelay: "0.2s" }}
          >
            🤣
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.3s" }}
          >
            🎊
          </span>
          <span
            className="inline-block animate-spin"
            style={{ animationDuration: "2s", animationDelay: "0.4s" }}
          >
            🏆
          </span>
        </div>
      </div>

      <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-30">
        💥
      </div>
      <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-25">
        🎯
      </div>
      <div
        className="absolute bottom-20 left-20 text-6xl animate-spin opacity-20"
        style={{ animationDuration: "4s" }}
      >
        🤣
      </div>
      <div className="absolute bottom-10 right-10 text-4xl animate-bounce opacity-30">
        🎊
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
