import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import TaskForm from '../pure/forms/taskForm'

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    'Example1',
    'Default Description 1',
    true,
    LEVELS.NORMAL,
  )

  const defaultTask2 = new Task(
    'Example2',
    'Default Description 2',
    false,
    LEVELS.URGENT,
  )

  const defaultTask3 = new Task(
    'Example3',
    'Default Description 3',
    false,
    LEVELS.BLOCKING,
  )

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])

  const [loading, setLoading] = useState(true)

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified')
    setTimeout(() => {
      setLoading(false)  
    }, 2000)
    return () => {
      console.log('TaskList componet is going to unmount...')
    }
  }, [tasks])

  const completedTask = (task) => {
    const index = tasks.indexOf(task)
    const tempTask = [...tasks]
    tempTask[index].completed = !tempTask[index].completed
    setTasks(tempTask)
  }

  const deleteTask = (task) => {
    const index = tasks.indexOf(task)
    const tempTask = [...tasks]
    tempTask.splice(index, 1)
    setTasks(tempTask)
  }

  const addTask = (task) => {
    const index = tasks.indexOf(task)
    const tempTask = [...tasks]
    tempTask.push(task)
    setTasks(tempTask)
  }

  const TaskTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskComponent
              key={index}
              task={task}
              complete={completedTask}
              remove={deleteTask}
            />
          ))}
        </tbody>
      </table>
    )
  }

  let tasksTable = tasks.length > 0 ? <TaskTable /> : <div>
    <h3>There are no task to show</h3>
    <h4>Please, create one</h4>
  </div>

  const loadingStyle = {
    color: 'gray',
    fontSize: '30px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          <div
            className="card-body p-3"
            data-mdb-perfect-scrollbar="true"
            style={{ position: 'relative', height: '400px' }}
          >
            {/* TODO: Add Loading Spinner */}
            {loading ? <p style={loadingStyle}>loading task...</p> : tasksTable}
          </div>
        </div>
        <TaskForm lenght={tasks.length} add={addTask} />
      </div>
    </div>
  )
}

TaskListComponent.propTypes = {}

export default TaskListComponent
