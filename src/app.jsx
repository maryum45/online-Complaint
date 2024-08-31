import React from "react"
import { Route, Routes } from 'react-router-dom'
import Complains from './pages/Complains'
import Form from './pages/Form'
import Sidenav from './pages/Sidenav'
import Admin from './pages/Admin'

function App() {
    return <div>
        <Routes>
            <Route path='/' element={<Complains />} />
            <Route path='/Form' element={<Form />} />
            <Route path='/Sidenav' element={<Sidenav />} />
            <Route path='/admin' element={<Admin />} />


        </Routes>

    </div>
}
export default App 