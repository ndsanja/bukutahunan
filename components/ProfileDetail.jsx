import { useState } from "react";
import { useRouter } from "next/router";
import * as Icon from "../components/Icon";
import Link from "next/link";

export default function ProfileDetail() {
  const router = useRouter();

  const [navbar, setNavbar] = useState(true);

  if (typeof window !== "undefined") {
    const changeBackground = () => {
      if (window.scrollY) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }

  return (
    <div className="bg-black">
      <div className="h-screen w-screen bg-white rounded-3xl flex flex-col overflow-scroll relative">
        <div className="h-16"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-x-1">
            <div className="h-20 w-20 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center mt-2">
              <div className="font-medium text-xl text-gray-700">
                Juliete Rahmawati
              </div>
              <div className="font-medium text-gray-500">XII - IPA 1</div>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.back()}
          className="fixed left-4 top-3 bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center z-40"
        >
          <Icon.X className="h-4 w-4 text-white" />
        </div>
        {navbar && (
          <div className="fixed bottom-4 bg-white h-12 w-7/12 left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-around">
            <Link href="/timeline">
              <a>
                <Icon.HomeBlack className="h-7 w-7" />
              </a>
            </Link>
            <Icon.Search className="h-7 w-7 text-gray-500" />
            <Icon.Chat className="h-7 w-7 text-gray-500" />
            <div className="h-7 w-7 bg-gray-600 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
