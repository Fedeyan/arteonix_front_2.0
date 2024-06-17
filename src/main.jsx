import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// pruebas de desarrollo
import axios from 'axios'

async function test() {
  try {
    const query = await axios.get("https://3001-idx-arteonix-back-20-1718638485195.cluster-uf6urqn4lned4spwk4xorq6bpo.cloudworkstations.dev/")
    console.log(query)
  } catch (error) {
    console.log(error)
  }

}

test()
// fin de las pruebas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
