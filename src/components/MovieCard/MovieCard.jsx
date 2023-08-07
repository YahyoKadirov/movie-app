import { Link } from "react-router-dom"

const MovieCard = ({ id, title, rating, date, img}) => {
  return (
    <>
    <div>
        <Link to={`/singlepage/${id}`}>
            <div className="hover:shadow-2xl  bg-black text-center shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg">
                  <div className="bg-black w-52 ml-14 bg-red-800 rounded-lg hover:bg-red-900">
                    <div>
                      <div className="rounded-full bg-black text-white w-10 p-2 absolute mt-72 ml-4">
                        <h4>{rating}</h4>
                      </div>
                      <img className="rounded-lg mt-12" src={img} alt="photo" />
                    </div>
                    <h1 className="text-md font-bold mt-4">{title}</h1>
                    <h4>{date}</h4>
                  </div>
            </div> 
        </Link>
    </div>
    
    </>
  )
}

export default MovieCard
