"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


export default function Home() {

  const skills = [
    "Python",
    "JavaScript",
    "html",
    "css",
    "MySQL",
    "C++",
  ];



  return (

    <main
      className="
      min-h-screen
      bg-[#FFF9F3]
      text-[#4A403A]
      overflow-hidden
      "
    >


      {/* 裝飾背景 */}

      <div
        className="
        absolute
        top-20
        left-10
        w-72
        h-72
        bg-[#F4C7C3]
        rounded-full
        blur-3xl
        opacity-50
        "
      />


      <div
        className="
        absolute
        bottom-20
        right-10
        w-80
        h-80
        bg-[#C9D8C5]
        rounded-full
        blur-3xl
        opacity-50
        "
      />




      {/* Navbar */}

      <nav
        className="
        relative
        z-10
        flex
        justify-between
        items-center
        px-8
        py-6
        "
      >

        <h1
          className="
          text-xl
          font-bold
          "
        >
          🌷 潘昕妤的作品集
        </h1>


        <div
          className="
          hidden
          md:flex
          gap-8
          text-sm
          "
        >

          <a href="/about">
            About
          </a>

          <a href="/projects">
            Projects
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>


      </nav>






      {/* Hero */}

      <section
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        justify-center
        px-6
        pt-20
        "
      >


        {/* 頭像 */}

        <motion.div

          initial={{
            opacity: 0,
            y: -30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          className="
              w-36
              h-36
              rounded-full
              overflow-hidden
              shadow-xl
              border-4
              border-white
              "
        >

          <Image

            src="/IMG_4788.JPG"

            alt="Xinyu profile"

            width={200}

            height={200}

            className="
              w-full
              h-full
              object-cover
              "
          />

        </motion.div>





        {/* Skills */}

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-3
          mt-8
          max-w-xl
          "
        >

          {
            skills.map((skill) => (

              <span

                key={skill}

                className="
                bg-white
                px-4
                py-2
                rounded-full
                shadow-sm
                border
                border-[#F0DDD5]
                text-sm
                "

              >

                {skill}

              </span>

            ))
          }

        </div>






        {/* Buttons */}

        <div
          className="
          flex
          gap-5
          mt-10
          "
        >

          <a

            href="/projects"

            className="
              bg-[#D99A9A]
              text-white
              px-7
              py-3
              rounded-full
              shadow-md
              hover:scale-105
              transition
              "

          >

            View Projects

          </a>



        </div>




        {/* Social */}

        <div
          className="
            flex
            gap-8
            mt-10
            text-xl
            text-[#8D7770]
            "
        >


          <a

            href="https://github.com/Xinyu320/Xinyu.git"

            target="_blank"

            rel="noopener noreferrer"

            className="hover:text-[#D99A9A] transition"

          >

            <FaGithub />

          </a>



          <a

            href="https://www.linkedin.com/in/潘昕妤/"

            target="_blank"

            rel="noopener noreferrer"

            className="hover:text-[#D99A9A] transition"

          >

            <FaLinkedin />

          </a>


        </div>



      </section>







    </main>

  );
}
