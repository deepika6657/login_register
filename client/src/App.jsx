import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import { Routes , Route, BrowserRouter} from 'react-router-dom'
import Login from './login'


function App() {
  
  return (


    
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<App/>}/>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  </BrowserRouter>
    
 
    
  )
}

export default App
