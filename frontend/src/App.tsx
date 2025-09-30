import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar.tsx'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="p-4 md:p-8">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App