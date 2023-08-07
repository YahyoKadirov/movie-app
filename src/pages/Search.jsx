import { useState } from "react"

const Search = () => {
const [state, setState] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.elements.query.value);
}

// console.log(state);
  return (
   <>
        <div className="font-sanserif mb-12  h-44">
            <div className="text-white text-2xl  mx-6">
                <h1>Welcome.</h1>
                <h2>Millions of Movies, Tv shows And People to discover. Explore now.</h2>
            </div>
            <div>
                <form className="flex p-4 justify-between" onSubmit={handleSubmit}>
                <input  className=" placeholder-red-800 w-4/5 mt-6 h-12 outline-none rounded-lg"id="query" type="search" placeholder="search movies..." onChange={(e)=> setState(e.target.value)} />
                <button className="bg-red-500 w-20 rounded-lg h-12 mt-6 text-white">Search</button>
            </form>
            </div>
        </div>
   </>
  )
}

export default Search
