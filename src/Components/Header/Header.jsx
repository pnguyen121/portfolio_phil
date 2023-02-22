import { Link } from "react-router-dom";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

function Header({ isAbout, isProject }) {
  return (
    <nav class="bg-zinc-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-zinc-800">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} class="flex items-center">
          <span class="self-center text-xl p-2 font-semibold whitespace-nowrap text-white dark:text-white">
            PHIL N
          </span>
        </Link>
        {/* <div class="flex md:order-2">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div> */}
        <div
          class="grid items-center justify-end w-6/12 md:flex md:w-11/12 md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-row p-2 rounded-lg items-center justify-items-center bg-zinc-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-zinc-800 dark:bg-zinc-800 md:dark:bg-zinc-800 dark:border-gray-700">
            {isAbout ? (
              <li>
                <Link
                  to={"/projects"}
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-purplephil md:hover:bg-transparent md:hover:text-purplephil md:p-0 md:dark:hover:text-pinkphil dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
              </li>
            ) : (
              ""
            )}
            {isProject ? (
              <li>
                <Link
                  to={"/about"}
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-purplephil md:hover:bg-transparent md:hover:text-purplephil md:p-0 md:dark:hover:text-pinkphil dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <a
                href="https://github.com/pnguyen121"
                target="_blank"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-purplephil md:hover:bg-transparent md:hover:text-purplephil md:p-0 md:dark:hover:text-pinkphil dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <GitHubLogoIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/phillipnguyen121/"
                target="_blank"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-purplephil md:hover:bg-transparent md:hover:text-purplephil md:p-0 md:dark:hover:text-pinkphil dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <LinkedInLogoIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
