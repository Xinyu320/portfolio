import Navbar from "@/components/Navbar";

export default function MotionAnalysis() {

  return (

    <main
      className="
      min-h-screen
      bg-[#FFF9F3]
      px-8
      py-20
      text-[#4A403A]
      "
    >

      <Navbar />

      <div
        className="
        max-w-5xl
        mx-auto
        "
      >

        <h1
          className="
          text-5xl
          font-bold
          "
        >
          FMS動作檢測平台 🌱
        </h1>

        <p
          className="
          mt-6
          text-lg
          text-gray-600
          "
        >
          使用 YOLO Pose 與 Mediapipe
          建立運動姿勢分析平台，
          提供姿勢辨識、分析與改善建議。
        </p>

        {/* Demo Video */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold">
            🎥 示範影片
          </h2>

          <video
            controls
            className="
            mt-6
            w-full
            rounded-3xl
            shadow-lg
            "
          >

            <source
              src="/video.mp4"
              type="video/mp4"
            />

          </video>

        </div>

        {/* 系統畫面 */}

        <div className="mt-16">

          <h2 className="text-2xl font-bold">
            📷 檢測畫面
          </h2>

          <img
            src="/image2.png"
            alt="Project"
            className="
            mt-6
            rounded-3xl
            shadow-lg
            "
          />

        </div>

        {/* 專案介紹 */}

        <div className="mt-16">

          <h2 className="text-2xl font-bold">
            📝 專案介紹
          </h2>

          <p className="mt-6 leading-8 text-gray-600">

            本系統以 Python 開發，

            結合 YOLO Pose、

            Mediapipe、

            HTML、 CSS、 JavaScript、 PHP、

            MySQL，

            建立完整的 AI 人體姿勢分析平台。

            使用者可上傳圖片或影片，

            系統會辨識人體關鍵點，

            並提供姿勢分析與改善建議。

          </p>

        </div>

        {/* 技術 */}

        <div className="mt-16">

          <h2 className="text-2xl font-bold">

            🛠 使用技術

          </h2>

          <div
            className="
            flex
            gap-3
            flex-wrap
            mt-6
            "
          >

            {
              [
                "html",
                "YOLOv8",
                "Mediapipe",
                "JavaScript",
                "php",
                "MySQL",
                
              ].map((item)=>(

                <span

                  key={item}

                  className="
                  bg-white
                  px-4
                  py-2
                  rounded-full
                  shadow
                  "

                >

                  {item}

                </span>

              ))
            }

          </div>

        </div>

      </div>

    </main>

  );

}