import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full navbar bg-base-200">
      <div className="navbar-start ">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <Image alt="Logo" src="/logo.png" width={234} height={44} />
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
