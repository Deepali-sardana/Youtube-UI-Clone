import React,{useContext,useEffect} from 'react'
import LeftNavbar from './LeftNavbar'
import { Context } from '../Context/ContextApi'
import VideoCard from './VideoCard'
export default function Feed() {
    const{loading,searchResults}=useContext(Context)
    useEffect(()=>{
        document.getElementById("root").classList.remove("custom-h")
    },[])
  return (
    <>
      <div className='flex flex-row h-[calc(100%-56px)]'>
        <LeftNavbar/>
        <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid cols-4 gap-4 p-5'>
            {loading ? (
            <p className='text-white'>Loading...</p>
          ) : (
            searchResults.map((item) => {
              if (item.type === "video" && item.video) {
                return (
                  <VideoCard
                    key={item?.video?.videoId}
                    video={item?.video}
                  />
                );
              }
              return null; 
            })
          )}
            </div>
        </div>
      </div>
    </>
  )
}
