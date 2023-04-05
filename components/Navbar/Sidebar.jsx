import React, { useState } from 'react';
//import { Link,useNavigate } from 'react-router-dom';

import { logo, sun } from '../../assets';
import { navlinks } from '../../constants';
import ThemeIcon from "./ThemeIcon";
import Router from 'next/router'


const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} 
           alt="fund_logo" 
           className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} 
           alt="fund_logo" 
           className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} 
          />
    )}
  </div>
)

const Sidebar = () => {
  //const navigate = useNavigate();
  //console.log('logo = ' + JSON.stringify(logo));
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      
        
     
        <div className="group flex items-center">
        <Icon styles="w-[52px] h-[52px]  border-[1px solid #ede4d1]  rounded-[50px]" isActive={"Me"} imgUrl={logo.src} />
          <div className="ltr:ml-3 rtl:mr-3">
            <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Kuete Donald</p>
            <p className="text-sm font-medium text-slate-500 group-hover:text-slate-700">Mid-senior</p>
          </div>
        </div>


      <div className="flex-1 flex flex-col justify-between items-center bg-[#4e53c9] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            
              <Icon 
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if(!link.disabled) {
                    setIsActive(link.name);
                    //navigate(link.link);
                    Router.push(link.link);
                  }
                }}
              />
            
          ))}
        </div>

        <ThemeIcon />
      </div>
    </div>
  )
}

export default Sidebar