import { Link } from "react-router-dom"
import SearchAside from "./SearchAside"
import LoginAside from "./LoginAside"

export default function Aside() {

  return (
    <aside className="md:block hidden col-span-3 row-span-12 bg-black bg-opacity-50 h-screen pt-4">
      <h1 className="text-2xl text-white font-extrabold text-center">Blog 94654</h1>
      <nav className="flex flex-col text-white pr-4">
        <Link to="/">
          <div className="py-2 px-4 rounded-r-xl duration-300 cursor-pointer hover:bg-gray-500 bg-opacity-55">Home</div>
        </Link>
        <SearchAside />
        <Link to="/">
          <div className="py-2 px-4 rounded-r-xl duration-300 cursor-pointer hover:bg-gray-500 bg-opacity-55">Settings</div>
        </Link>
        <LoginAside />
      </nav>
    </aside>
  )
}
