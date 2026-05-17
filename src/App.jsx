import React from 'react'
import { Routes , Route } from 'react-router-dom'
import LandingPage from './components/layout/LandingPage'
import Dashboard from './components/dashboard/Dashboard'
function App() {
  return (<>
<Routes>
  <Route path='/' element={<LandingPage/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
</Routes>

</> 

)
}

export default App