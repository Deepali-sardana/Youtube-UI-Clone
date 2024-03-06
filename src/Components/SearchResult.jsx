import React,{useEffect,useContext,useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchdatafromapi } from '../utils/api'
import { Context } from '../Context/ContextApi'
import LeftNavbar from './LeftNavbar' 
import SearchResutCard from './SearchResutCard'

export default function SearchResult() {
  const [result,setResult]=useState([])
  const {searchQuery}=useParams()
  const {setLoading}=useContext(Context)
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  },[searchQuery])
  const fetchSearchResults=()=>{
    setLoading(false)
    fetchdatafromapi(`search/?q=${searchQuery}`)
    .then((res)=>{
        console.log(res)
        setResult(res?.contents|| [])
    })
    .finally(()=>{
      setLoading(true)
    })
  }
    return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
        <LeftNavbar/>
        <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
           <div className='grid grid-cols-1 gap-2 p-5'>
            {result?.map((item,index)=>{
                if(item?.type==="video")  return null
                let video=item?.video
                return(
                    <SearchResutCard
                    key={`${video?.videoId}-${index}`}
                    video={item?.video}/>
                )
            })}

           </div>
        </div>
      
    </div>
  )
}
