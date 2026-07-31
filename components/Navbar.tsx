"use client";

import Link from "next/link";

export default function Navbar(){

  return(

    <nav
      className="
      flex
      justify-between
      items-center
      px-8
      py-6
      "
    >

      {/* 首頁按鈕 */}

      <Link
        href="/"
        className="
        bg-white
        px-5
        py-2
        rounded-full
        shadow-md
        text-[#8D7770]
        hover:bg-[#F8E8E2]
        transition
        "
      >

         Home

      </Link>




      {/* 導覽 */}

      <div
        className="
        flex
        gap-5
        text-sm
        "
      >

        <Link
          href="/about"
          className="hover:text-[#D99A9A]"
        >
          About
        </Link>


        <Link
          href="/projects"
          className="hover:text-[#D99A9A]"
        >
          Projects
        </Link>



        <Link
          href="/contact"
          className="hover:text-[#D99A9A]"
        >
          Contact
        </Link>


      </div>


    </nav>

  )

}