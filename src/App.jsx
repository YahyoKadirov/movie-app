import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { Home, Movie, Search, SinglePage, SingleTv, People} from "./pages"
import Header from "./components/Header"
import "./App.css"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import SinglePage from "./pages/SinglePage"
import { People } from "./pages/People"
import Search from "./pages/Search"
import { SinglePeople } from "./pages/SinglePeople"
function App() {

  return (
    <>
    
    <BrowserRouter>
    {/* <Header /> */}
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/movie" element={<Movie/>}/>
            <Route exact path="/singlepage/:id" element={<SinglePage />}/>
            <Route exact path="/single-person/:id" element={<SinglePeople />}/>
            <Route exact path="/people" element={<People />}/> 
            <Route exact path="/search/:id" element={<Search/>}/> 
           

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
