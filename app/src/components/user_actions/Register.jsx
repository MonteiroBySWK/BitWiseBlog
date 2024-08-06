export default function Register() {
  return (
    <div>
      <form action="localhost:8000/auth/register" method="POST">
        <p>
          <label>Nome</label>
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Sobrenome</label>
          <input type="text" name="last_name" required />
        </p>
        <p>
          <label>Email</label>
          <input type="email" name="email" required />
        </p>
        <p>
          <label>Senha</label>
          <input type="password" name="password" required />
        </p>
        <p>
          <label>Confirmar senha</label>
          <input type="password" name="password2" required />
        </p>
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}
