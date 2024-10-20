import Link from "next/link";
import Logo from "../common/Logo";
import { headers } from "next/headers";
import clsx from "clsx";

export default function Header() {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  return (
    <header className="container mx-auto">
      <div className="flex justify-between items-center pt-7">
        <Logo />
        <nav>
          <ul className="flex items-center gap-4 text-lg child:duration-300">
            <li>
              <Link
                href="/"
                className={clsx("border-b transition-colors hover:border-b-gray-800", {
                  "font-bold border-b-gray-800": pathname === "/",
                  "border-b-transparent": pathname !== "/",
                })}
              >
                Home
              </Link>
            </li>
            <li
              className={clsx("border-b transition-colors hover:border-b-gray-800",{
                "font-bold  border-b-gray-800": pathname === "/about",
                "border-b-transparent": pathname !== "/about",
              })}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={clsx("border-b transition-colors hover:border-b-gray-800",{
                "font-bold  border-b-gray-800": pathname === "/contact",
                "border-b-transparent": pathname !== "/contact",
              })}
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              className={clsx("border-b transition-colors hover:border-b-gray-800",{
                "font-bold  border-b-gray-800": pathname === "/blog",
                "border-b-transparent": pathname !== "/blog",
              })}
            >
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
