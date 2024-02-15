import { useEffect, useState } from "react"

export const useFetch = ({url}) => {

    const [data, getData]= useState([]);
    console.log("url",url)
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            getData(result);
        }
        fetchData();
    },[url])
    
  return {data}
}
