import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../utils/constants'
import { Context } from '../Context/ContextApi'
import LeftnavbarMenu from './LeftnavbarMenu'
export default function LeftNavbar() {
    const {selectCategories,setselectCategories,mobileMenu}=useContext(Context);
  const navigate=useNavigate();
    const clickHandler=(name,type)=>{
    switch(type){
        case "category":
            return setselectCategories(name);
        case "home":
            return setselectCategories(name);
        case "menu":
            return false;
        default:
            break; 
    }
  }
    return (
    
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 transition-all
    ${
        mobileMenu ? "translate-x-0" : "translate-x-[-240px] md:translate-x-0 "
    }`}>
        <div className='flex px-5 flex-col' >
            {categories.map((item)=>{
                return(
                    <React.Fragment>
                        <LeftnavbarMenu
                        text={item.type==="home"?"Home":item.name}
                        icon={item.icon}
                        action={()=>{
                            clickHandler(item.name,item.type);
                            navigate("/")
                        }}
                        className={`${
                            selectCategories===item.name
                            ?"bg-white/[0.15]":""
                        }`}
                        />
                        {item.divider && (
                            <hr className='my-5 border-white/[0.2]'/>
                        )}
                    </React.Fragment>
                )
            })}
            <hr className='my- border-white/[0.2]'/>
            <div className='text-white/[0.5] text-[12px]'>
                Clone by:Deepali Sardana
            </div>
        </div>
    </div>
  )
}
