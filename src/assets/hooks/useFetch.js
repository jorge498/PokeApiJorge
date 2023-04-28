import { useEffect, useState } from "react"

export function useFetch(url){
const [data,setData] = useState(null)


useEffect(()=>{
    fetch(url)
    .then((response) => response.json())
    .then((data)=> setData(data.forms))
    .catch(()=> setData([]))
      },[url])
      return{data}
    }

    