import React from 'react'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import Content from '../components/Content'

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <div className="body">
        <SideMenu />
        <Content />
      </div>
    </div>
  )
}

export default Main