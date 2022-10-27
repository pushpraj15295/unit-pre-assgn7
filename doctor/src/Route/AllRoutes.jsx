import React from 'react'
import {Route, Routes} from "react-router-dom"
import Doctor from '../Components/Doctor'
import Home from '../Components/Home'
import Hospital from '../Components/Hospital'


const AllRoutes = () => {
  return (
    <div>
    
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/doctor/:id" element={<Doctor/>} />
       <Route path="/hospital" element={<Hospital/>} />
     </Routes>



    </div>
  )
}

export default AllRoutes