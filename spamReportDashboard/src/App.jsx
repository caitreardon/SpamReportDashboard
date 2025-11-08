import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>Spam Report</h1>
      <h3>Stay Up-To Date with recent phising trends</h3>
      </header>
      <div className="card">
        <h3>Send us your spam! Forward suspicious or scam emails to our <a onClick={() => navigator.clipboard.writeText('robertroboterson@gmail.com')}>email</a></h3>
      </div>
      
    </>
  )
}

export default App
