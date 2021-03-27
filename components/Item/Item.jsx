import { useState } from "react";
import Link from "next/link";

export default function Item() {
  const [tap, setTap] = useState(false);
  return (
    <>
      <div
        onClick={() => setTap(!tap)}
        className="flex items-center justify-center w-full h-full relative"
      >
        Item 1
      </div>
      {tap && (
        <Link href="/profile">
          <a className="absolute w-8 h-8 bg-red-500 rounded-full top-8 left-1/2 transform -translate-1/2 cursor-pointer z-50">
            <div></div>
          </a>
        </Link>
      )}
    </>
  );
}
