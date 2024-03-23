import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

const App = () => {
  const [alert, setAlert] = useState({ error: '', msg: '', color: ''})

  return (
    <div>
      <Registro alert={alert} setAlert={setAlert} />
    </div>
  )
}

export default App
