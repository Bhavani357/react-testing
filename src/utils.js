import { useState} from "react"
import { useEffect } from "react"

function useGetApiData(url){
    let [data,setData] = useState({})

    useEffect(()=>{getData()},[])

    async function getData(){
        let res = await fetch(url);
        let apiData = await res.json();
        setData(apiData)

    }
    return data
}

export default useGetApiData