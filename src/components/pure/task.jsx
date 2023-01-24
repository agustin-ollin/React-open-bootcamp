import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log('Created Task')

    return () => {
      console.log(`Task: ${task.name} is going to unmount`)
    }
  }, [task])

  /**
   * Function that returns a Badge depending on
   * the level of the task
   */
  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        )
        break
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        )
        break
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        )
        break
      default:
        break
    }
  }

  /**
   *
   * @returns Icon depending on completion in the task
   */
  const taskCompletedIcon = () =>
    task.completed ? (
      <i
        onClick={() => complete(task)}
        className="bi-toggle-on task-action"
        style={{ color: 'green' }}
      ></i>
    ) : (
      <i
        onClick={() => complete(task)}
        className="bi-toggle-off task-action"
        style={{ color: 'grey' }}
      ></i>
    )

  const taskCompleted = {
    color: 'gray',
    textDecoration: 'line-through',
  }

  const taskPending = {
    fontWeight: 'bold',
    color: 'tomato',
  }

  return (
    <tr
      className="fw-normal"
      style={task.completed ? taskCompleted : taskPending}
    >
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">{taskLevelBadge()}</td>
      <td className="align-middle">
        {taskCompletedIcon()}
        <i
          onClick={() => remove(task)}
          className="bi-trash task-action"
          style={{ color: 'tomato' }}
        ></i>
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

export default TaskComponent
