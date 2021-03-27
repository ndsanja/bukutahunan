import Link from "next/link";

export default function Splash() {
  return (
    <div>
      <Link href="/timeline">
        <a>
          <div className="flex flex-col sm:flex-row justify-center items-center w-full h-screen font-bold text-7xl">
            <div className="text-black border-t-4 border-red-500">SHOT</div>
            <div className="text-red-500 border-b-4 border-black">STORY</div>
          </div>
        </a>
      </Link>
    </div>
  );
}
