import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Post() {
  const { slug } = useParams()

  const [post, setPost] = useState([])

  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/blog/${slug}`)
      const data = response.data
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getParagraphs = () => {
    // Achar Quebra de Linha no Texto
    const regex = /\r?\n/g
    let Text = new String(post.text)
    let listIndex = [...Text.matchAll(regex)].map(match => match.index)
    listIndex.unshift(0)

    // Criar os Elementos de Paragrafos
    let paragraphs = []
    for (let i = 0; i < listIndex.length; i++) {
      paragraphs[i] = Text.slice(listIndex[i], listIndex[i + 1])
    }

    paragraphs = paragraphs.map((item, index) => <p key={index} className="py-1 my-1">{item}</p>)
    return paragraphs
  }
  useEffect(() => {
    getPost()
  }, [])



  return (
    <div className="col-span-9 flex flex-col p-4 pt-2 text-white" id="text">
      <Link to="/"><div className="duration-300 p-1 px-4 w-fit hover:bg-gray-500 rounded-lg">Voltar</div></Link>
      <div className="p-4 bg-black rounded-xl bg-opacity-20 mt-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold my-2 ">{post.title}</h1>
          <div>curtidas {post.likes} comentarios</div>
        </div>
        <h2 className="text-lg font-medium mb-4">Por : {post.author}</h2>
        <div className="text-lg font-light mb-2">{getParagraphs()}</div>
      </div>
      <div>
        Comentarios
      </div>
    </div>
  )
}
