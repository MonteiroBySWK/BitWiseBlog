import { useState, useEffect } from "react"

export default function Profile() {
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

  const perfil = {
    first_name: "Gabriel",
    last_name: "Monteiro",
    username: "montbyswk",
  }

  return (
    <div>
      <p>{perfil.username}</p>
      <p>{perfil.first_name} {perfil.last_name}</p>

      <div>
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

    </div>
  )
}
