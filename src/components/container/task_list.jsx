import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {
  const defaultTask = new Task(
    'Example',
    'Default Description',
    false,
    LEVELS.NORMAL,
  )

  const [tasks, setTasks] = useState([defaultTask])

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified')

    return () => {
      console.log('TaskList componet is going to unmount...')
    }
  }, [tasks])

  const changeCompleted = () => {
    console.log('TODO: Cambiar estado de una tarea')
  }

  return (
    <div>
      <div>Your Task:</div>
      <TaskComponent key={1} task={defaultTask} />
    </div>
  )
}

TaskListComponent.propTypes = {}

export default TaskListComponent
