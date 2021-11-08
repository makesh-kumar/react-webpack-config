import React from 'react'
import './styles.css'
function App() {
  return (
    <div>
      <h2>React Apps</h2>
      <h3>{process.env.NODE_ENV} </h3>
      <h3>{JSON.stringify(process.env.name)}</h3>
    </div>
  )
}

export default App
