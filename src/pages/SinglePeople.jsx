import { useParams  } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SinglePeopleCard } from '../components/SinglePeopleCard'
import Header from '../components/Header'

export const SinglePeople = () => {
 const {id} = useParams()

 const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
   })

   useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/person/${id}`, {
      params: {
        api_key: "070e6ab2234f2cc6c7b7886ce27ab7cb"
      }
    })
    .then((res)=> res)
    .then((data)=> {console.log(data);
      setState({
        isFetched: true,
        data: data.data,
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
   console.log("state",state.data);
  const title = state.data
  
  return (
 <>
<Header />

 <SinglePeopleCard 
 image={`https://www.themoviedb.org/t/p/w440_and_h660_face${title.profile_path}`} 
 title={title.name} date={title.birthday} 
 overview={title.biography} 
 place={title.place_of_birth}
 />
 {

 }
 
 </>
  )
}