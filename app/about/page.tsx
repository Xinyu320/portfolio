import Navbar from "@/components/Navbar";
export default function About() {

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
      <section
        className="
        max-w-4xl
        mx-auto
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          "
        >
          About Me 🌷
        </h1>


        <div
          className="
          mt-8
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          "
        >

          <p
            className="
            leading-relaxed
            text-gray-600
            "
          >

            您好，我是潘昕妤

            <br /><br />

            是長榮大學資訊工程學系畢業的學生

            <br /><br />

            我對人工智慧應用開發與前端系統設計充滿熱忱，
            致力於將 AI 模型與實際應用結合，打造能解決問題的智慧化系統。

            <br /><br />

            在學期間，我累積了 Python、html、MySQL、JavaScript、css
            與前後端整合開發經驗，
            並投入電腦視覺相關研究，使用 YOLO Pose 與 Mediapipe
            建立運動姿勢分析平台。

            <br /><br />

            畢業專題是透過深度學習模型進行人體姿勢辨識，
            結合後端服務與資料庫管理，
            提供使用者即時分析結果與改善建議。

            <br /><br />

            此外，我曾於工業技術研究院（工研院）參與實習，
            接觸實際軟體開發流程，培養問題分析、
            系統設計與團隊合作能力。

            <br /><br />

            未來希望能持續精進 AI 應用開發能力，
            參與更多智慧化產品與後端系統的建置。

          </p>


        </div>




        <div
          className="
          grid
          md:grid-cols-3
          gap-5
          mt-10
          "
        >

          <Info
            title="🎓 Education"
            text="長榮大學資訊工程學系"
          />

          <Info
            title="💻 Focus"
            text="AI 應用開發 / 前後端工程"
          />


          <Info
            title="🌱 Goal"
            text="學習更多知識與累積經驗"
          />


        </div>


      </section>


    </main>

  )

}



function Info({
  title,
  text
}: {
  title: string;
  text: string;
}) {

  return (

    <div
      className="
      bg-white
      rounded-2xl
      p-6
      shadow-md
      "
    >

      <h3
        className="
        font-bold
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-3
        text-gray-500
        "
      >
        {text}
      </p>

    </div>

  )
}