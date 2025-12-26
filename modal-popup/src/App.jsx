import { useState } from 'react'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='w-full h-full'>
      <button className='bg-green-500 rounded-lg p-2 cursor-pointer' onClick={()=>setShowModal(true)}>Show</button>
      {showModal &&(
        <div className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 transition">
          <div className="bg-white p-6 flex flex-col w-1/2 h-fit rounded-lg">
            <div className="border-b-2 p-2">
              <h1 className='text-2xl font-bold'>Hello World</h1>
            </div>
            <div className="p-2 border-b-2">
              <p className='text-slate-400 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui consequuntur molestiae? Iusto laudantium consequuntur, in, quia tenetur sequi commodi eius praesentium saepe facilis accusamus esse, ipsam neque minus optio.</p>
            </div>
            <div className="flex flex-row gap-3 mt-2 text-white">
              <button onClick={()=>setShowModal(false)} className='bg-blue-600 p-2 rounded-lg hover:bg-blue-400 hover:text-black transition'>Continue</button>
              <button onClick={()=>setShowModal(false)} className='bg-slate-600 p-2 rounded-lg hover:bg-slate-400 hover:text-black transition'>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
