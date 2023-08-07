import axios from "axios";
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard/MovieCard";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const SinglePage = () => {
 const {id} = useParams()
 const [state, setState] = useState({
  isFetched: false,
  data: [],
  error: false,
 })
 useEffect(()=> {
  axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: "070e6ab2234f2cc6c7b7886ce27ab7cb"
    }
  })
  .then((res)=> res)
  .then(data => setState({
    isFetched:true,
    data: data.data,
    error:false
  }))
  .catch(err => err)
  
 }, []) 
 console.log(state); 
 const styleBg = {backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${state.data.backdrop_path})`}
  return (
   <>
      <div className=" bg-cover bg-no-repeat h-[100vh]" style={styleBg}>
        <Header />
            <div key={state.id} className="  container mx-auto grid grid-cols-4">
        {state.isFetched ? (
            <div className="flex mt-[90px] ml-[80px]">
  <img
    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.backdrop_path}`}
    width={300}
    alt=""
    className="w-72 rounded"
  />
              <div className="opacity-90 text-red-500 border rounded-lg bg-black border-none p-4 block ml-14">
                <h1 className="text-xl font-bold "><span className="text-white">Film name</span> :{state.data.title}</h1>
                <p className="text-gray-500">language: {state.data.original_language}</p>
                <h1 className="text-xl font-bold mt-4 text-white">Overview</h1>
                <div className="w-72">
                  <p>{state.data.overview}</p>
                </div>
              </div>
            </div>
        ) : (
          <>
              <h1>loading</h1>
          </>
        )}
    </div>
      </div>
   </>
  )
}

export default SinglePage
