import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import * as Icon from "../Icon";

export default function Profile() {
  const photo = [
    {
      id: 0,

      url:
        "https://images.unsplash.com/photo-1602415171561-ecb858417200?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,

      url:
        "https://4.bp.blogspot.com/-XVIVnAivjOU/T_7EYWzu26I/AAAAAAAAACA/R032vv6Yr38/s1600/bg+biru.jpg",
    },

    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1521656958087-ed26dfcf5a30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaG9vbCUyMGdyYWR1YXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      url:
        "https://lh3.googleusercontent.com/w9cC9eclImGHGa1p7E_l3d6VhTPzfOF9DtrGkSxcN__aEHHpd9Qb_sRwfvELUVrwd-nElC7JlP2sswpC9ivxl0TouKpLb4SUu_ofoefrKdF-hCkOmk7d-PevfyDWFT0fDVUM53Hd6ysfL6p1dnJRPtktjUL7ZDkTnPczd1R99ChfCL3_C2ztWjHDqL0JkfB4dtnJoiVZyVIx09YfgtO4fZb3O_vfqroDPGCOhWoBL4FH6ssFvL9wQj9HJJ5F7MRD1UvOww33N8Q64MysGyvSbu6I9F_vCEFAXrUPYyWjjzHbaUfJcNE2PzDBnWt09tdNKMDzKvOEhElXRvBI9B1eocSMyoGAGuHpS-U-TUySRQ0lRHEEWw0l-pBulFZbo2fhEG77vcccvoVAGSMNE8Dtl9vV63Rk6SE7eyis_L0DRDMhg4tuQGG92JfgAiM8aiaufC01JMBSUM9gpaESVqoPlIGD7PNtZGAwM3sL0AE1KmTbuos_pGFPw_Or3rFiNSFb33Mzz2Rkyv2eHTWzv49Z0JIVg5fFSfpdlziAeR95aZUUGTWe2E4RQ_ZyI9fGcsVBbJPCjX3NlZ4IlaB22yF33TZKcKtY3CHgiRNtjiOyCaq1ubVmcJEo9TtdUJxNY49xMp9LF29r7k6IEhDpvyubdObqQe5SpoWKrDqD4kIvXliMjTPwNFiZYulyCt7YtOgqgQQqmIC3rFTUZ9xDZ5C15g=w392-h587-no?authuser=0",
    },
  ];

  const [detail, setDetail] = useState(false);
  const [swipe, setSwipe] = useState(0);
  const add = () => {
    swipe == photo.length - 1
      ? setSwipe(photo.length - 1)
      : setSwipe(swipe + 1);
  };
  const min = () => {
    swipe == 0 ? setSwipe(0) : setSwipe(swipe - 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row">
      <div className="sm:w-5/12 h-screen fixed top-0 sm:relative">
        <div className="absolute top-2 left-2">
          <Link href="/timeline">
            <a>
              <Icon.ArrowBack className="h-6 w-6 text-gray-300 " />
            </a>
          </Link>
        </div>

        <div className="flex w-full h-full overflow-hidden ">
          {photo.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="min-w-full h-full bg-blue-500"
            >
              <img
                className="h-full w-full object-cover"
                src={item.url}
                alt=""
              />
            </div>
          ))}
        </div>

        <Link href={`/profile#${swipe - 1}`}>
          <a className="absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer">
            <div onClick={min}>
              <Icon.ChevronLeft className="h-6 w-6 text-white" />
            </div>
          </a>
        </Link>

        <Link href={`/profile/#${1 + swipe}`}>
          <a className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer">
            <div onClick={add}>
              <Icon.ChevronRight className="h-6 w-6 text-white" />
            </div>
          </a>
        </Link>

        <div className="absolute flex items-center space-x-2 top-4 left-1/2 transform -translate-x-1/2">
          {photo.map((item) => (
            <div
              key={item.id}
              className={`${
                swipe == item.id
                  ? "w-3 h-3 rounded-full bg-white cursor-pointer"
                  : "w-2 h-2 rounded-full bg-white cursor-pointer"
              } `}
            ></div>
          ))}
        </div>
        {!detail && (
          <div
            onClick={() => setDetail(!detail)}
            className="sm:hidden absolute flex flex-col items-center justify-center bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <Icon.ChevronUp className="text-white w-8" />
            <div className="text-white font-semibold">Details</div>
          </div>
        )}
      </div>
      {detail && (
        <div className="sm:hidden z-30 sm:z-0 sm:w-8/12 h-screen overflow-y-auto px-4 py-16 sm:p-8 absolute top-0 bg-white bg-opacity-70 transform transition-all ease-in-out duration-500">
          <div
            onClick={() => setDetail(!detail)}
            className="sm:hidden fixed z-50 flex flex-col items-center justify-center top-2 left-1/2 transform -translate-x-1/2 "
          >
            <div className="text-black font-semibold">Down</div>
            <Icon.ChevronDown className="text-black w-6" />
          </div>

          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            officiis minus ut temporibus non. Corrupti minus repudiandae,
            laudantium, blanditiis in obcaecati neque non impedit natus dolorem
            accusantium sequi aspernatur est exercitationem molestias expedita
            incidunt excepturi recusandae eveniet debitis adipisci soluta quam.
            Non rerum deleniti ipsa doloremque deserunt delectus quia at nam id,
            nemo, qui distinctio iste sit eum illo velit odit doloribus natus
            commodi. Culpa sunt ducimus consequuntur explicabo repudiandae velit
            non aperiam iusto nesciunt itaque. Unde, natus molestiae nemo,
            facere in ab quas vero sed ea porro illo dolorum nihil hic
            asperiores debitis distinctio eum ullam perferendis tenetur
            voluptates.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            officiis minus ut temporibus non. Corrupti minus repudiandae,
            laudantium, blanditiis in obcaecati neque non impedit natus dolorem
            accusantium sequi aspernatur est exercitationem molestias expedita
            incidunt excepturi recusandae eveniet debitis adipisci soluta quam.
            Non rerum deleniti ipsa doloremque deserunt delectus quia at nam id,
            nemo, qui distinctio iste sit eum illo velit odit doloribus natus
            commodi. Culpa sunt ducimus consequuntur explicabo repudiandae velit
            non aperiam iusto nesciunt itaque. Unde, natus molestiae nemo,
            facere in ab quas vero sed ea porro illo dolorum nihil hic
            asperiores debitis distinctio eum ullam perferendis tenetur
            voluptates.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            officiis minus ut temporibus non. Corrupti minus repudiandae,
            laudantium, blanditiis in obcaecati neque non impedit natus dolorem
            accusantium sequi aspernatur est exercitationem molestias expedita
            incidunt excepturi recusandae eveniet debitis adipisci soluta quam.
            Non rerum deleniti ipsa doloremque deserunt delectus quia at nam id,
            nemo, qui distinctio iste sit eum illo velit odit doloribus natus
            commodi. Culpa sunt ducimus consequuntur explicabo repudiandae velit
            non aperiam iusto nesciunt itaque. Unde, natus molestiae nemo,
            facere in ab quas vero sed ea porro illo dolorum nihil hic
            asperiores debitis distinctio eum ullam perferendis tenetur
            voluptates.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            officiis minus ut temporibus non. Corrupti minus repudiandae,
            laudantium, blanditiis in obcaecati neque non impedit natus dolorem
            accusantium sequi aspernatur est exercitationem molestias expedita
            incidunt excepturi recusandae eveniet debitis adipisci soluta quam.
            Non rerum deleniti ipsa doloremque deserunt delectus quia at nam id,
            nemo, qui distinctio iste sit eum illo velit odit doloribus natus
            commodi. Culpa sunt ducimus consequuntur explicabo repudiandae velit
            non aperiam iusto nesciunt itaque. Unde, natus molestiae nemo,
            facere in ab quas vero sed ea porro illo dolorum nihil hic
            asperiores debitis distinctio eum ullam perferendis tenetur
            voluptates.
          </div>
        </div>
      )}

      <div className="w-8/12 h-screen overflow-y-auto p-8 bg-white sm:block hidden">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          officiis minus ut temporibus non. Corrupti minus repudiandae,
          laudantium, blanditiis in obcaecati neque non impedit natus dolorem
          accusantium sequi aspernatur est exercitationem molestias expedita
          incidunt excepturi recusandae eveniet debitis adipisci soluta quam.
          Non rerum deleniti ipsa doloremque deserunt delectus quia at nam id,
          nemo, qui distinctio iste sit eum illo velit odit doloribus natus
          commodi. Culpa sunt ducimus consequuntur explicabo repudiandae velit
          non aperiam iusto nesciunt itaque. Unde, natus molestiae nemo, facere
          in ab quas vero sed ea porro illo dolorum nihil hic asperiores debitis
          distinctio eum ullam perferendis tenetur voluptates.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          officiis minus ut temporibus non. Corrupti minus repudiandae,
          laudantium, blanditiis in obcaecati neque non impedit natus dolorem
          accusantium sequi aspernatur est exercitationem molestias expedita
          incidunt excepturi recusandae eveniet debitis adipisci soluta quam.
          Non rerum deleniti ipsa doloremque deserunt delectus quia at nam id,
          nemo, qui distinctio iste sit eum illo velit odit doloribus natus
          commodi. Culpa sunt ducimus consequuntur explicabo repudiandae velit
          non aperiam iusto nesciunt itaque. Unde, natus molestiae nemo, facere
          in ab quas vero sed ea porro illo dolorum nihil hic asperiores debitis
          distinctio eum ullam perferendis tenetur voluptates.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          officiis minus ut temporibus non. Corrupti minus repudiandae,
          laudantium, blanditiis in obcaecati neque non impedit natus dolorem
          accusantium sequi aspernatur est exercitationem molestias expedita
          incidunt excepturi recusandae eveniet debitis adipisci soluta quam.
          Non rerum deleniti ipsa doloremque deserunt delectus quia at nam id,
          nemo, qui distinctio iste sit eum illo velit odit doloribus natus
          commodi. Culpa sunt ducimus consequuntur explicabo repudiandae velit
          non aperiam iusto nesciunt itaque. Unde, natus molestiae nemo, facere
          in ab quas vero sed ea porro illo dolorum nihil hic asperiores debitis
          distinctio eum ullam perferendis tenetur voluptates.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          officiis minus ut temporibus non. Corrupti minus repudiandae,
          laudantium, blanditiis in obcaecati neque non impedit natus dolorem
          accusantium sequi aspernatur est exercitationem molestias expedita
          incidunt excepturi recusandae eveniet debitis adipisci soluta quam.
          Non rerum deleniti ipsa doloremque deserunt delectus quia at nam id,
          nemo, qui distinctio iste sit eum illo velit odit doloribus natus
          commodi. Culpa sunt ducimus consequuntur explicabo repudiandae velit
          non aperiam iusto nesciunt itaque. Unde, natus molestiae nemo, facere
          in ab quas vero sed ea porro illo dolorum nihil hic asperiores debitis
          distinctio eum ullam perferendis tenetur voluptates.
        </div>
      </div>
    </div>
  );
}
