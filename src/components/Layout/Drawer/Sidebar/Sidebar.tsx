import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="flex items-center justify-center h-16 bg-base-300">
        <Link href="/">
          <Image alt="Logo" src="/logo-small.png" width={32} height={32} />
        </Link>
      </div>
      <ul className="menu min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </>
  );
}
