
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />

      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <h2 className='text-3xl text-Favorite'>Footer</h2>
    </>
  )
}

export default App
