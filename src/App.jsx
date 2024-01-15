import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <p>Navbar</p>
        </nav>
      </header>
      <main>
        <p>Main</p>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App
