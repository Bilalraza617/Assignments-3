import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { Fragment } from "react";

const font = Ubuntu({ weight: "700", subsets: ["latin"] });
const data = [
  { li: "Home", link: "/" },
  { li: "About", link: "/about" },
  { li: "Contact Us", link: "/contact" },
  { li: "Services", link: "/services" },
  { li: "Projects", link: "/projects" },
  { li: "Experience", link: "/experience" },
];

const Header = () => {
  return (
    <header className="max-w-[80%] m-auto text-5xl flex justify-between">
      <h1 className={`${font.className}`}>BILAL</h1>
      <ul className="flex gap-3  items-center justify-end">
        {data.map((item, i) => (
          <Fragment key={i}>
            <li className="hover:text-gray-600 text-[1rem] cursor-pointer">
              <Link href={item.link} key={i}>
                {item.li}
              </Link>
            </li>
            {item.li !== "Experience" ? (
              <span key={i} className="w-[.5px] h-[50%] bg-black"></span>
            ) : (
              ""
            )}
          </Fragment>
        ))}
      </ul>
    </header>
  );
};

export default Header;
