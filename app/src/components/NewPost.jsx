import { useState } from "react";
import { Link } from "react-router-dom";


export default function NewPost() {
  const [post, setPost] = useState({
    "title": "",
    "author": "",
    "text": "",
  })

  const handlePost = (event) => {
    setPost({
      ...post,
      [event.target.value]: event.target.value,

    })
  }

  const submitPost = () => {

  }

  return (
    <div className="col-span-9 p-4 pt-2 text-white">

      <Link to="/"><div className="duration-300 p-1 px-4 w-fit hover:bg-gray-500 rounded-lg">Voltar</div></Link>
      <div className="p-4 rounded-lg bg-black bg-opacity-20 mt-2">
        <form action="http://localhost:8000/blog/" method="POST" encType="multipart/form-data">
          <input type="hidden" name="csrfmiddlewaretoken" value="" />

          <p className="mb-2">
            <label htmlFor="title" className="w-full">Titulo</label>
            <input type="text" name="title" id="title" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
          </p>
          <p className="mb-2">
            <label htmlFor="author" className="w-full">Autor</label>
            <input type="text" name="author" id="author" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
          </p>
          <p className="mb-2">
            <label htmlFor="text" className="w-full">Artigo</label>
            <textarea name="text" id="text" rows={15} className="mt-1 bg-transparent border w-full rounded-lg p-1"></textarea>
          </p>

          <button type="submit" className="px-10 py-2 border rounded-lg duration-300 hover:bg-green-600">Post</button>
        </form>
      </div>
    </div >
  )
}
