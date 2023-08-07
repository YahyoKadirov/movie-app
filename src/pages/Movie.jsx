import axios from "axios";
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard/MovieCard";
import Header from "../components/Header";

const Movie = () => {
 const [state, setState] = useState({
  isFetched: false,
  data: [],
  error: false,
 })
 useEffect(()=> {
  axios.get("https://api.themoviedb.org/3/movie/top_rated", {
    params: {
      api_key: "070e6ab2234f2cc6c7b7886ce27ab7cb"
    }
  })
  .then((res)=> res)
  .then((data)=> {
    setState({
      isFetched: true,
      data: data.data.results,
      error: false,
    })
  })
  .catch((err)=>{
    useState({
      isFetched:true,
      data:[],
      error:true
    })
  })
 }, []) 
 console.log(state); 
  return (

   <>
   <Header />
   <h1 className="text-xl m-8">Top reated Films</h1>
    <div className="container mx-auto grid grid-cols-4">

        {
            state?.data?.map((movie)=>(
               <MovieCard 
                    id={movie.id}
                    key={movie.id}
                    img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    title={movie.title} 
                    rating={movie.vote_average}
                    date={movie.release_date}
               />
            ))
        }
    </div>
   </>
  )
}

export default Movie
