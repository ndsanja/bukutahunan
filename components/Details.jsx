import { useState } from "react";
import * as Icon from "../components/Icon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();

  const [full, setFull] = useState(false);
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
      url:
        "https://lh3.googleusercontent.com/w9cC9eclImGHGa1p7E_l3d6VhTPzfOF9DtrGkSxcN__aEHHpd9Qb_sRwfvELUVrwd-nElC7JlP2sswpC9ivxl0TouKpLb4SUu_ofoefrKdF-hCkOmk7d-PevfyDWFT0fDVUM53Hd6ysfL6p1dnJRPtktjUL7ZDkTnPczd1R99ChfCL3_C2ztWjHDqL0JkfB4dtnJoiVZyVIx09YfgtO4fZb3O_vfqroDPGCOhWoBL4FH6ssFvL9wQj9HJJ5F7MRD1UvOww33N8Q64MysGyvSbu6I9F_vCEFAXrUPYyWjjzHbaUfJcNE2PzDBnWt09tdNKMDzKvOEhElXRvBI9B1eocSMyoGAGuHpS-U-TUySRQ0lRHEEWw0l-pBulFZbo2fhEG77vcccvoVAGSMNE8Dtl9vV63Rk6SE7eyis_L0DRDMhg4tuQGG92JfgAiM8aiaufC01JMBSUM9gpaESVqoPlIGD7PNtZGAwM3sL0AE1KmTbuos_pGFPw_Or3rFiNSFb33Mzz2Rkyv2eHTWzv49Z0JIVg5fFSfpdlziAeR95aZUUGTWe2E4RQ_ZyI9fGcsVBbJPCjX3NlZ4IlaB22yF33TZKcKtY3CHgiRNtjiOyCaq1ubVmcJEo9TtdUJxNY49xMp9LF29r7k6IEhDpvyubdObqQe5SpoWKrDqD4kIvXliMjTPwNFiZYulyCt7YtOgqgQQqmIC3rFTUZ9xDZ5C15g=w392-h587-no?authuser=0",
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

  const people = [
    {
      nama: "Juliete Rahmawati",
      url:
        "https://images.unsplash.com/photo-1616268164880-673b3ba611bb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      nama: "Rian Dwiliyan",
      url:
        "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      nama: "Romeo Suratman",
      url:
        "https://images.unsplash.com/photo-1586822339087-80cc375ac083?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      nama: "Gabriela Larasati",
      url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      nama: "Deni Denosa",
      url:
        "https://images.unsplash.com/photo-1594823823554-b3cf73448d3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbiUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      nama: "Katarina Niranana",
      url:
        "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      nama: "Joel Juliani",
      url:
        "https://images.unsplash.com/photo-1594369428909-cf575675ca9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="bg-black flex flex-col h-screen overflow-scroll w-screen relative">
      <div
        onClick={() => router.back()}
        className="fixed left-4 top-3 bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center z-40"
      >
        <Icon.ChevronLeft className="h-4 w-4 text-white" />
      </div>
      <div>
        <div className="w-screen rounded-t-3xl overflow-hidden relative">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM0fHxwZW9wbGUlMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div>
            <Icon.DotsHorizontal className="h-8 w-8 text-white absolute top-3 right-4" />
          </div>
        </div>
        <div className="bg-white px-4 py-2 flex flex-col leading-tight">
          <div className=" font-semibold text-gray-700 text-xl">
            Perkantoran Duniawi
          </div>
          <div className="text-xs">XII - IPA 4</div>
          <div className="font-medium text-gray-600 mt-4 text-center">
            Yang ada di dalam foto ini
          </div>
        </div>
        <div
          className={`flex flex-col -space-y-4 bg-white overflow-hidden -mt-2 ${
            full ? "" : "max-h-52"
          }`}
        >
          {people.map((item) => (
            <div
              key={item.nama}
              className="bg-white px-4 py-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-1">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={item.url}
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-700">{item.nama}</div>
                </div>
              </div>
              <Link href="/profile">
                <a>
                  <div className="bg-gray-200 px-4 py-2 flex items-center justify-center rounded-full font-medium text-gray-700">
                    Profile
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div onClick={() => setFull(!full)} className="bg-white">
          {full ? (
            <div className="flex text-gray-600 items-center justify-center bg-white space-x-1 bg-opacity-50 p-1 px-4 rounded-full">
              <div>Minimalkan</div>
              <Icon.ChevronUp className="h-4 w-4" />
            </div>
          ) : (
            <div className="flex text-gray-600 items-center justify-center bg-white space-x-1 bg-opacity-50 p-1 px-4 rounded-full">
              <div>Tampilkan Semua</div>
              <Icon.ChevronDown className="h-4 w-4" />
            </div>
          )}
        </div>
        <div className="bg-white rounded-b-3xl flex items-center justify-around py-4 px-4 w-full">
          <Icon.Chat className="h-8 w-8 text-gray-600" />
          <div className="bg-red-500 px-4 py-3 rounded-full font-medium text-white">
            Simpan
          </div>

          <Icon.Share className="h-8 w-8 text-gray-600" />
        </div>
      </div>
      <div className="bg-white rounded-3xl mt-1 px-4 pb-8 flex flex-col w-full">
        <div className="text-xl font-medium py-2 text-center">
          Bagikan Tanggapan Anda
        </div>
        <div className="mt-3">
          <div className="flex items-center space-x-1">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-900">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1615751755902-13a0845fb9a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE5fHx3b21hbiUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <div className="font-medium text-gray-700">Diana Mariana</div>
            </div>
          </div>
          <div className="ml-12 -mt-2 text-gray-600">Cantiq nyaaa...</div>
          <div className="h-8"></div>

          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-900">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="flex-1">
              <input
                className="w-full bg-gray-200 py-3 rounded-full px-4 focus:outline-none"
                type="text"
                placeholder="Tambahkan Komentar"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-6 pt-4 rounded-3xl mt-1">
        <div className="text-xl font-medium text-center">
          Lainya Seperti Ini
        </div>
        <div className="w-screen masonry bg-white px-2 mt-4 mb-14">
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
  );
}
