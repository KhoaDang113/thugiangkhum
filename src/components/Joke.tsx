"use client";

"use client";

export default function Joke() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center overflow-hidden flex-row gap-[60px]">
      <img src="\images\meo-haha.jpeg" alt="chuot cuoi" />
      <video
        autoPlay
        loop
        className="w-full h-screen max-w-xl rounded-xl shadow-xl"
      >
        <source src="\0705.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
      <img src="\images\meo-cuoi.jpeg" alt="meo cuoi" />
    </div>
  );
}
