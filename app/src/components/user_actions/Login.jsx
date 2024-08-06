export default function Login() {
  return (
    <div>
      <form action="" method="POST">
        <p>
          <label>Email</label>
          <input type="email" placeholder="example@example.com" required />
        </p>

        <p>
          <label>Password</label>
          <input type="password" required />
        </p>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
