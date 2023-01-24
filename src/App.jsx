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
import Father from './components/container/father'
import OptionalRender from './components/pure/optionalRender'
import Square from './components/pure/square'
import LoginFormik from './components/pure/forms/loginFormik'
import RegisterFormik from './components/pure/forms/registerFormik'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Proyecto Final */}
      {/* <TaskListComponent /> */}

      {/* Ejemplos de uso de formik y yup */}
      {/* <LoginFormik/> */}
      <RegisterFormik />

      {/* <ContactListComponent /> */}
      {/* <Ejemplo2 /> */}
      {/* <MiComponentConContexto /> */}
      {/* <Ejemplo4 name='ollin'>
        <h3>Contenido del props,children</h3>
      </Ejemplo4> */}
      {/* <GreetingStyled name='Ollin' /> */}
      {/* <Clock /> */}

      {/* Gestion de Eventos */}
      {/* <Father /> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender /> */}

      {/* Ejercicios sesiones 10, 11 y 12 */}
      {/* <Square /> */}
    </div>
  )
}

export default App
