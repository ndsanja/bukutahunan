import Content from "./Content/Content";
import * as Icon from "../components/Icon";
import { useState } from "react";
import Link from "next/link";

export default function Timeline() {
  const [tagAktive, setTabAktive] = useState("Semua");
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

  const tag = ["Semua", "Boys", "Girls", "Groups", "Individu", "IPA", "IPS"];

  const photo = [
    {
      id: 2,
      title: "lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1521656958087-ed26dfcf5a30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaG9vbCUyMGdyYWR1YXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 12,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlb3BsZSUyMGdyb3VwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 13,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM0fHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,
      title: "lorem ipsum dolor",
      from: "XII - IPS 2",

      url:
        "https://4.bp.blogspot.com/-XVIVnAivjOU/T_7EYWzu26I/AAAAAAAAACA/R032vv6Yr38/s1600/bg+biru.jpg",
    },
    {
      id: 0,
      title: "lorem ipsum",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1602415171561-ecb858417200?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: 3,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1616974071885-e81eff99c3bc?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: 5,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1608508733949-8d34e056981a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Lorem",
      from: "XII - IPS 2",
      url: "https://live.staticflickr.com/65535/51018505075_d1aaedb2f3_k.jpg",
    },
    {
      id: 6,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1616586169190-fb7ff2abd757?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1487613813677-3f382ecb8868?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1519261386176-e55a3fa9ff01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTcxfHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1525025500848-f00b7d362dec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjAzfHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 11,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjM3fHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: 14,
      title: "Lorem",
      from: "XII - IPS 2",
      url:
        "https://images.unsplash.com/photo-1464666495445-5a33228a808e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQzfHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="relative h-screen overflow-scroll">
      <div className="flex space-x-2 my-2 mx-2 overflow-scroll">
        {tag.map((item) => (
          <div
            onClick={() => setTabAktive(item)}
            key={item}
            className={`${
              tagAktive == item
                ? "bg-black text-white rounded-full px-3 py-2 font-medium"
                : "text-gray-900 font-medium px-3 py-2"
            } `}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-screen masonry bg-white px-2 mt-2 mb-14">
        {photo.map((item) => (
          <Link href="/details">
            <a key={item.id} className="">
              <div className="mb-2">
                <div className="">
                  <img
                    className="h-full w-full rounded-2xl"
                    src={item.url}
                    alt=""
                  />

                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs px-1 text-gray-600 font-semibold">
                        {item.title}
                      </div>
                      <div className="text-xs px-1 text-gray-600">
                        {item.from}
                      </div>
                    </div>

                    <div>
                      <Icon.DotsHorizontal className="h-5 w-5 text-gray-700 pr-1" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      {navbar && (
        <div className="fixed bottom-4 bg-white h-12 w-7/12 left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-around">
          <Icon.HomeBlack className="h-7 w-7" />
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
  );
}
