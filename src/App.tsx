import Interface from './components/Interface'
import Veryfy from './components/Verify'
import './App.css'

function App() {

   return (
   <div className='h-screen w-screen flex flex-col items-center justify-center
   lg:flex-row lg:justify-around '>
    <Interface />
    <Veryfy />
   </div>
  )
}

export default App
