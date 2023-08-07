import { Link } from "react-router-dom"



const Header = () => {
  
  return (
    <div className="font-sanserif text-2xl  p-4 flex justify-between text-white">
      <div className="m-2">
        <Link className="uppercase text-white font-san-serif hover:text-red-900 " to={"/"}>Movie</Link>
      </div>
        
             <ul className="flex gap-4 items-center">
                <li className="hover:text-red-900 ">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-red-900 ">
                    <Link to={"/movie"}>Top Rated </Link>
                </li>
                <li className="hover:text-red-900 ">
                    <Link to={"/people"}>People</Link>
                </li>
            </ul>
      
    </div>
  )
}

export default Header
