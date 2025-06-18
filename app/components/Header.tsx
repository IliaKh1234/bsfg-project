import React from 'react'

const Header = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  return (
    <div className='header bg-[#152535] w-full flex'>
      <div className={`${sidebarOpen ? 'w-[240px]' : 'w-[75px]'} bg-[#253241] h-[40px] transition-all duration-300`}></div>
      <div className=''>
        
      </div>
    </div>
  )
}

export default Header
