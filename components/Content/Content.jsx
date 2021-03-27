import { useState } from "react";
import Link from "next/link";
import * as Icon from "../Icon";
import Item from "../Item/Item";

export default function Content() {
  const photo = [
    {
      id_image: 0,
      items: [
        {
          id: 0,

          url:
            "https://images.unsplash.com/photo-1519261386176-e55a3fa9ff01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTcxfHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          tag: "",
        },
        {
          id: 1,

          url:
            "https://images.unsplash.com/photo-1525025500848-f00b7d362dec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjAzfHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          tag: "",
        },

        {
          id: 2,
          url:
            "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjM3fHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          tag: "",
        },
      ],
    },
    {
      id_image: 1,
      items: [
        {
          id: 0,

          url:
            "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlb3BsZSUyMGdyb3VwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          tag: "gabriela",
        },
        {
          id: 1,

          url:
            "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM0fHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          tag: "anisa",
          place: "top-8 right-52",
        },

        {
          id: 2,
          url:
            "https://images.unsplash.com/photo-1464666495445-5a33228a808e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQzfHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          tag: "",
        },
      ],
    },
  ];

  const [swipe, setSwipe] = useState(0);
  const [tap, setTap] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="w-full sm:h-screen relative py-8">
        <div className="w-full sm:h-screen overflow-scroll space-y-8">
          {photo.map((image) => (
            <div
              key={image.id_image}
              className="flex w-full h-full overflow-hidden relative"
            >
              {image.items.map((item) => (
                <div
                  onClick={() => setTap(!tap)}
                  key={item.id}
                  id={`${image.id_image}-${item.id}`}
                  className="min-w-full h-full bg-blue-500 relative"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={item.url}
                    alt=""
                  />
                  {tap && item.url == item.url && item.tag == "anisa" && (
                    <Link href="/profile">
                      <a className="absolute h-8 w-8 rounded-full bg-red-500 top-8 right-52 z-50 border border-white">
                        <div className=""></div>
                      </a>
                    </Link>
                  )}

                  <Link href={`/timeline#${image.id_image}-${swipe - 1}`}>
                    <a className="absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer">
                      <div
                        onClick={() =>
                          swipe == 0 ? setSwipe(0) : setSwipe(swipe - 1)
                        }
                      >
                        <Icon.ChevronLeft className="h-6 w-6 text-white" />
                      </div>
                    </a>
                  </Link>

                  <Link href={`/timeline#${image.id_image}-${1 + swipe}`}>
                    <a className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer">
                      <div
                        onClick={() =>
                          swipe == image.items.length - 1
                            ? setSwipe(image.items.length - 1)
                            : setSwipe(swipe + 1)
                        }
                      >
                        <Icon.ChevronRight className="h-6 w-6 text-white" />
                      </div>
                    </a>
                  </Link>
                  <div className="absolute flex items-center space-x-2 bottom-4 left-1/2 transform -translate-x-1/2">
                    {image.items.map((item) => (
                      <div
                        key={item.id}
                        className={`${
                          `${image.id_image}-${swipe}` ==
                          `${image.id_image}-${item.id}`
                            ? "w-3 h-3 rounded-full bg-white cursor-pointer"
                            : "w-2 h-2 rounded-full bg-white cursor-pointer"
                        } `}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
