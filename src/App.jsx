// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        
        <div>
          <Suspense fallback={<p>Nadir vai loading.......</p>}>
            <Countries countriesPromise={countriesPromise}></Countries>
          </Suspense>
          
        </div>
        
      </section>

      

      

      
    </>
  )
}

export default App
