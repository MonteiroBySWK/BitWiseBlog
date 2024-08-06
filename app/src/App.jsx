import RoutesList from "./routes/RoutesList";
import Aside from "./components/aside/Aside";

export default function App() {
  return (
    <div id="mount" className="md:grid grid-cols-12 bg-indigo-900 w-full overflow-hidden">
      <Aside />
      <RoutesList />
    </div>
  )
}


