import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FGreeting from './components/pure/FGreeting'
import TaskListComponent from './components/container/task_list'
import ContactListComponent from './components/container/contact_list'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponentConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'
import GreetingStyled from './components/pure/greetingStyled'
import Clock from './hooks/lifecycle/Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <TaskListComponent /> */}
      {/* <ContactListComponent /> */}
      {/* <Ejemplo2 /> */}
      {/* <MiComponentConContexto /> */}
      {/* <Ejemplo4 name='ollin'>
        <h3>Contenido del props,children</h3>
      </Ejemplo4> */}
      {/* <GreetingStyled name='Ollin' /> */}
      <Clock />
    </div>
  )
}

export default App
