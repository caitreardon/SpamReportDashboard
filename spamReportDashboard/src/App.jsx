import { useState } from 'react'
import './App.css'

function App() {
  let totalCount = 200;
  let emailsCount = 75;

  return (
    <>
      <header>
        <h1>Spam Report</h1>
        <h3>Stay Up-To Date with recent phising trends</h3>
        <h3>{totalCount} emails analyzed total from {emailsCount} users!</h3>
        
      </header>
      <div className="emailCard">
        <h3>Send us your spam! Forward suspicious or scam emails to our <a onClick={() => navigator.clipboard.writeText('robertroboterson@gmail.com')}>email</a></h3>
      </div>

    </>
  )
}

export default App
