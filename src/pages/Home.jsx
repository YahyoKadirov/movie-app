import Popular from "../components/Popular"
import TrendingCard from "../components/TrendingCard"
import All from "./All/All"
import Search from "./Search"
const Home = () => {
    return(
      <div>
      <All />
      <TrendingCard />
      <Popular />
      </div>
    )
}

export default Home
