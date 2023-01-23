import {
  UilApps,
  UilBriefcaseAlt,
  UilEstate,
  UilFileAlt,
  UilMessage,
  UilScenery,
  UilTimes,
  UilUser,
} from "@iconscout/react-unicons";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Abdullah Mansoor - Fullstack Developer</title>
        <meta
          name="description"
          content="This is a personal portfolio website of Abdullah Mansoor (Software Engineer / Fullstack Developer)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header
        className="w-[100%] fixed bottom-0 left-0 z-[100] bg-body"
        id="header"
      >
        <nav className="max-w-[968px] h-12 flex justify-between items-center ml-6 mr-6">
          <a
            href="#"
            className="nav__logo text-title font-medium hover:text-first"
          >
            Abdullah
          </a>
          <div
            className={
              "nav__menu fixed left-0 w-[100%] bg-body pt-8 px-6 pb-16 shadow-[0_-1px_4px_rgba(0,0,0,.15)] rounded-[1.5rem_1.5rem_0_0] transition-all ease-in-out duration-[.3s] " +
              (!!toggle ? " bottom-0" : " bottom-[-100%]")
            }
            id="nav-menu"
          >
            <ul className="nav__list grid-cols-3 gap-8 grid">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link flex flex-col items-center text-small text-title font-medium hover:text-first"
                >
                  <UilEstate />
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className="nav__link flex flex-col items-center text-small text-title font-medium hover:text-first"
                >
                  <UilUser />
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className="nav__link flex flex-col items-center text-small text-title font-medium hover:text-first"
                >
                  <UilFileAlt />
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  className="nav__link flex flex-col items-center text-small text-title font-medium hover:text-first"
                >
                  <UilBriefcaseAlt />
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  className="nav__link flex flex-col items-center text-small text-title font-medium hover:text-first"
                >
                  <UilScenery />
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className="nav__link flex flex-col items-center text-small text-title font-medium hover:text-first"
                >
                  <UilMessage />
                  Contact Me
                </a>
              </li>
            </ul>
            <div
              onClick={() => setToggle(false)}
              className="nav__close absolute right-[1.3rem] bottom-2 text-2xl cursor-pointer text-first hover:text-first-100"
            >
              <UilTimes />
            </div>
          </div>

          <div className="nav__btns">
            <div
              onClick={() => setToggle(true)}
              className="nav__toggle text-title font-medium text-[1.1rem] cursor-pointer hover:text-first"
              id="nav-toggle"
            >
              <UilApps />
            </div>
          </div>
        </nav>
      </header>
      <main className=""></main>
    </>
  );
}
