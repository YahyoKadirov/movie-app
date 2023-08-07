import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


const Popular = () => {
 const {id} = useParams()
 const [state, setState] = useState({
  isFetched: false,
  data: [],
  error: false,
 })
 useEffect(()=> {
  axios.get("https://api.themoviedb.org/3/movie/popular", {
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
    <div className="mt-[50px] container mx-auto overflow-hidden">
      <div className="flex items-center py-7">
        <h1 className="mr-5 text-2xl font-bold text-white">Popular</h1>
      </div>
      <div className=" flex overflow-auto ">
        {state?.data?.map((state) => (
          <Link to={`/singlepage/${state.id}`}>
            <div key={state.id} className="w-[170px] shrink-0">
              <img
                className="w-36 rounded-lg"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${state.poster_path}`}
                alt=""
              />
              <p className="mt-3 ">
                {Math.round(state.vote_average * 10)}%
              </p>
              <p className=" w-36 text-sm font-bold text-red-700">
                {state.title}
              </p>
              <p className="text-slate-500">{state.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
      </>
  )
}

export default Popular