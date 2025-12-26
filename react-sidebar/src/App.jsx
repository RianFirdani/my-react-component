import Sidebar from './components/Sidebar'
import './App.css'

function App() {

  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 min-h-screen bg-blue-300 flex items-center justify-center">
        <h1 className='text-3xl font-bold'>Bismillah ya allah</h1>
      </div>
    </div>
  )
}

export default App
