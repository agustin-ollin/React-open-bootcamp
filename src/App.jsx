import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FGreeting from './components/pure/FGreeting'
import TaskListComponent from './components/container/task_list'
import ContactListComponent from './components/container/contact_list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Aplicacion de tareas</h1>
      {/*<TaskListComponent />*/}
      <ContactListComponent />
    </div>
  )
}

export default App
