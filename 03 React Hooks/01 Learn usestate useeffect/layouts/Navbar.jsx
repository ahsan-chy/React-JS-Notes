'use client'
import Link from "next/link";

// CustomLink component to handle styling
const CustomLink = ({ href, children, className }) => {
  return (
    <Link href={href}>
      <button className={className}>{children}</button>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="rounded-lg border-4 border-yellow-800">
      <div className="flex gap-2.5 justify-between">
        <CustomLink href="/" className="text-green-900 text-xl font-bold">
          Home
        </CustomLink>

        <div className="flex gap-2.5">
          <span className="">
            <CustomLink href="/home" className="text-green-900">
              Home
            </CustomLink>
          </span>
          <span className="">
            <CustomLink href="/UpdateObject" className="text-green-900">
              Update Object
            </CustomLink>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
