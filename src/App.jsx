import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import PlantillaUsuariosGenericos from './components/PlantillaUsuariosGenericos';

function App() {

  return (
    <>
      <Menu />
      <div className="container">
        <div className="row my-2">
          <button className="btn btn-info col-2">GENERAR USUARIOS GENÉRICOS</button>
        </div>
        <PlantillaUsuariosGenericos />
      </div>
    </>
  )
}

export default App
