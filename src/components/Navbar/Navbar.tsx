import { Link } from "react-router";
import "./Navbar.css";
import {
  FaHome,
  FaPencilAlt,
  FaPollH,
  FaClipboardList,
  FaBookmark,
  FaPowerOff,
  FaPoll
} from "react-icons/fa";

export function Navbar() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-600 h-screen text-white shadow-lg sticky top-0 z-50">
        <div className="px-4 py-6">
          <h1 className="text-2xl mb-14 text-center flex items-center justify-center gap-2"><FaPoll className="h-8 w-8"/>QuickPoll</h1>
          <nav className="space-y-10">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 p-2 hover:bg-gray-500 rounded-md"
            >
              <FaHome className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/createpoll"
              className="flex items-center gap-2 p-2 hover:bg-gray-500 rounded-md"
            >
              <FaPencilAlt className="h-5 w-5" />
              <span>Create Poll</span>
            </Link>
            <Link
              to="/votedpoll"
              className="flex items-center gap-2 p-2 hover:bg-gray-500 rounded-md"
            >
              <FaPollH className="h-5 w-5" />
              <span>Voted Polls</span>
            </Link>
            <Link
              to="/mypolls"
              className="flex items-center gap-2 p-2 hover:bg-gray-500 rounded-md"
            >
              <FaClipboardList className="h-5 w-5" />
              <span>My Polls</span>
            </Link>
            <Link
              to="/bookmarks"
              className="flex items-center gap-2 p-2 hover:bg-gray-500 rounded-md"
            >
              <FaBookmark className="h-5 w-5" />
              <span>Bookmarks</span>
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-4 w-full px-4">
          <button className="flex items-center gap-2 w-full p-2 bg-white text-gray-600 rounded-md hover:bg-gray-200">
            <FaPowerOff className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
