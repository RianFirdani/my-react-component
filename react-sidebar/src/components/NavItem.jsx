import React from 'react'

const NavItem = ({icon,text,isOpen,setIsOpen}) => {
  return (
    <div className='flex cursor-pointer w-full hover:text-blue-400 items-center gap-4'>
        <span onClick={()=>setIsOpen((prev)=>!prev)} data-tooltip-id={!isOpen ? 'sidebar-tooltip' : ''} data-tooltip-content={
            !isOpen ? text : undefined} className='text-xl '>{icon}</span>
        {isOpen &&(
            <div className="">{text}</div>
        )}
    </div>
  )
}

export default NavItem