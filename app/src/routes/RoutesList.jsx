import { Routes, Route } from "react-router-dom"
import Blog from "../components/Blog"
import Post from "../components/Post"
import NewPost from "../components/NewPost"
import RegisterUser from "../components/RegisterUser"
import Login from "../components/user_actions/Login"
import Register from "../components/user_actions/Register"
import Profile from "../components/user_actions/Profile"

export default function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="post/:slug" element={<Post />} />
      <Route path="create" element={<NewPost />} />
      <Route path="register" element={<RegisterUser />} />
      <Route path="user/login" element={<Login />} />
      <Route path="user/register" element={<Register />} />
      <Route path="user/profile" element={<Profile />} />
    </Routes>
  )
}
