
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

function App() {
 

  return (
    <>
      
      <div className='flex flex-col lg:flex-row '>
        <div className='ml-0'>
          <SideBar></SideBar>
        </div>
        <div className=''>
          <Outlet></Outlet>
        </div>
      </div>
      
    </>
  )
}

export default App
