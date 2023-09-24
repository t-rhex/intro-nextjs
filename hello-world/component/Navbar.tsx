import Link from "next/link";

const Navbar: React.FC = () => (
  <header className="bg-blue-500 text-white py-4">
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/">
        {/* Use a div or a span instead of an anchor */}
        <div className="text-2xl font-bold">Your Name</div>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog">
              <a className="hover:text-gray-300">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className="hover:text-gray-300">Portfolio</a>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
