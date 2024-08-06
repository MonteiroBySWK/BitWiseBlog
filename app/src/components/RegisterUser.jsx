import { useState } from "react"
import { Link } from "react-router-dom"

export default function RegisterUser() {
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()

  const handlePassword = () => {
    if (password !== passwordConfirm) {
      console.log("as senhas nao batem")
      return <p>Senhas nao batem</p>
    }
  }

  return (
    <div className="col-span-9 p-4 pt-2 text-white">
      <Link to="/"><div className="duration-300 p-1 px-4 w-fit hover:bg-gray-500 rounded-lg">Voltar</div></Link>
      <div className="p-4 rounded-lg bg-black bg-opacity-20 mt-2">
        <form action="" method="POST">
          <p className="mb-2">
            <label htmlFor="first-name" className="w-full">Nome</label>
            <input type="text" name="first-name" id="first-name" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
          </p>

          <p className="mb-2">
            <label htmlFor="last-name" className="w-full">Sobrenome</label>
            <input type="text" name="last-name" id="last-name" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
          </p>

          <p className="mb-2">
            <label htmlFor="username" className="w-full">Username</label>
            <input type="text" name="username" id="username" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
          </p>

          <p className="mb-2">
            <label htmlFor="email" className="w-full">Email</label>
            <input type="email" name="email" id="email" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
          </p>

          <p className="mb-2">
            <label htmlFor="password" className="w-full">Senha</label>
            <input value={password} type="password" name="password" id="password" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
          </p>

          <p className="mb-2">
            <label htmlFor="password-confirm" className="w-full">Confirmar senha</label>
            <input value={passwordConfirm} onChange={handlePassword()} type="password" name="password-confirm" id="password-confirm" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
          </p>


          <button type="submit" className="px-10 py-2 border rounded-lg duration-300 hover:bg-green-600">Registrar</button>
        </form>
      </div>
    </div >

  )
}
