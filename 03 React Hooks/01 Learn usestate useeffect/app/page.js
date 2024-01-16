import Navbar from "@/layouts/Navbar";
import Link from "next/link";

export const CustomLink = ({ href, children, className }) => {
  return (
    <Link href={href}>
      <span className={className}>{children}</span>
    </Link>
  );
};

export default function Home() {
  return (
    <main className="w-full p-8">
      <nav className="rounded-lg border-yellow-800">
        <div className="flex gap-2.5 justify-between">
          <CustomLink href="/" className="text-green-900 text-xl font-bold">
            Home
          </CustomLink>

          <ul className="flex gap-2.5">
            <li>
              <CustomLink
                href="/UseStateBetter"
                className="border-r-4 pr-2 text-green-900 text-xl hover:text-green-700 hover:underline">
                Use State
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="/ConditionalRendering"
                className="border-r-4 pr-2 text-green-900 text-xl hover:text-green-700 hover:underline">
                Conditional Rendering
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="/UpdateObject"
                className="border-r-4 pr-2 text-green-900 text-xl hover:text-green-700 hover:underline">
                Update Object
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
