import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Complains from './Complains'

function Sidenav() {
  

  



    return <div>

        

        <Complains/>
        <div className='bg-orange-400 fixed h-screen w-[22%] border-r-6 border-slate-500'>
            <h1>Dashboard</h1>
            <ul>
                <NavLink to='/'><li classNam="hover:underline curser-pointer">Complains</li></NavLink>
                <NavLink to='/logout'><li classNam="hover:underline curser-pointer">Logout</li></NavLink>
            </ul>
             
        </div>

    </div>
}
export default Sidenav