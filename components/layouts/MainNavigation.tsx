import Link from "next/link";
import React from "react";

const MainNavigation = () => {
  return (
    <nav className="bg-slate-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-2xl">
      <div className="mx-auto text-5xl container flex flex-wrap justify-between items-center mx-auto ">
        Meetings
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link href="/">Home Page</Link>
          </li>
          <li>
            <Link href="/addMeeting">Add Meeting</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;