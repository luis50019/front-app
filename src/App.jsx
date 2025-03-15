import { lazy } from "react"
import { Routes,Route } from "react-router"
import Home from "./pages/Home.jsx"
const PageInfo = lazy(()=>import('./pages/Info.jsx'))


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element = {<PageInfo/>}/>
    </Routes>
  )
}

export default App
