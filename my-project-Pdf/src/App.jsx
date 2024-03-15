
import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import MenuLateral from './components/MenuLateral';




function App() {


  return (
    <>
      <div className='flex'>
        <Dashboard />
        <Navbar />

      </div>

    </>


  )
}

export default App
