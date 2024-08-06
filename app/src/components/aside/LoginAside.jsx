import { useState } from "react"

export default function LoginAside() {
  const [toogleLogin, setToogleLogin] = useState(false)

  const handleToogleLogin = () => {
    setToogleLogin(tl => !tl)
  }


  return (
    <>
      <div onClick={handleToogleLogin} className="py-2 px-4 flex justify-between rounded-r-xl duration-300 cursor-pointer hover:bg-gray-500 bg-opacity-55"><span>Login</span> {toogleLogin ? <span>[-]</span> : <span>[+]</span>}</div>
      {toogleLogin ?
        <div className="pl-4 mt-2 text-sm">
          <form className="border rounded p-2">
            <p className="mb-1">
              <label htmlFor="username" className="w-full">Username</label>
              <input type="text" name="username" id="username" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
            </p>

            <p className="mb-1">
              <label htmlFor="password" className="w-full">Senha</label>
              <input type="password" name="password" id="password" className="mt-1 bg-transparent border w-full rounded-lg p-1" />
            </p>

            <button type="submit" className="duration-300 w-fit mt-2 px-6 py-1 border rounded-lg text-cente hover:bg-green-600">Entrar</button>
          </form>
        </div> : null
      }
    </>
  )
}
