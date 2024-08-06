import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Blog() {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/blog')
      const data = response.data
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <div className="col-span-9 flex items-center flex-col p-4">
      <h1 className="text-2xl text-white font-bold mb-4">POSTS</h1>
      <div className="flex flex-wrap justify-stretch rounded-lg p-2 gap-2 bg-black bg-opacity-20">
        {posts.length == 0 ? <p className="text-center my-5"> ... </p> : posts.map(item =>
          <Link key={item.id} to={`post/${item.title}`}>
            <div
              className="duration-300 border grow hover:border-white font-bold rounded py-2 text-white text-lg px-4 hover:bg-gray-500"
              key={item.id}
            >
              <p className="text-sm font-medium">{item.author}</p>
              {item.title}
              <div className="flex gap-x-4">
                <p className="text-xs font-light">Comentarios - 18</p>
                <p className="text-xs font-light">Curtidas - {item.likes}</p>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="duration-300 w-fit px-6 py-1 border rounded-lg text-center text-white text-lg hover:bg-green-600">
        <Link to="create">Criar Post</Link>
      </div>
    </div>
  )
}
