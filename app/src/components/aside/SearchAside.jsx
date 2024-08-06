import { useState } from "react"
import "./styleAnimations.css"

export default function SearchAside() {
  const [toogleSearch, setToogleSearch] = useState(false)

  const handleToogleSearch = () => {
    setToogleSearch(ts => !ts)
  }

  return (<>
    <div onClick={handleToogleSearch} className="py-2 flex justify-between px-4 rounded-r-xl duration-300 cursor-pointer bg-opacity-55"><span>Search</span> {toogleSearch ? <span>[-]</span> : <span>[+]</span>}</div >
    {
      toogleSearch ?
        <div className="pl-4 mt-2 text-sm">
          <form className="border rounded p-2" >
            <p className="mb-1">
              <input type="search" name="search" id="search" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
            </p>

            <button type="submit" className="duration-300 w-fit mt-2 px-6 py-1 border rounded-lg text-cente hover:bg-green-600">Pesquisar</button>
          </form >
        </div > : null
    }

  </>
  )
}

