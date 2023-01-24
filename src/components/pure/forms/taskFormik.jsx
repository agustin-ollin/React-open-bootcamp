import React from 'react'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'
import PropTypes from 'prop-types'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const TaskFormik = ({ add, lenght }) => {
  const normalStyle = {
    color: 'blue',
    fontWeight: 'bold',
  }

  const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold',
  }

  const blockingStyle = {
    color: 'tomato',
    fontWeight: 'bold',
  }

  const initialValues = {
    name: '',
    description: '',
    completed: false,
    level: LEVELS.NORMAL,
  }

  const taskSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    level: Yup.string()
      .oneOf(
        [LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT],
        'You must select a Level: Blocking, Normal or Urgent',
      )
      .required('Level is required'),
  })

  const submit = (values) => {
    alert('Add Task')
  }

  const addTask = (e) => {
    const newTask = new Task(e.name, e.description, false, e.level)
    add(newTask)
  }

  return (
    <div>
      <h4>Create Task</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          addTask(values)
        }}
      >
        {({ touched, errors, isSubmitting, getFieldProps }) => (
          <Form className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Task Name"
                className="form-control form-control-lg"
              />
              {errors.name && touched.name && (
                <ErrorMessage name="name" component="div" />
              )}

              <Field
                id="description"
                type="text"
                name="description"
                className="form-control form-control-lg"
                placeholder="Task Description"
              />
              {errors.description && touched.description && (
                <ErrorMessage name="description" component="div" />
              )}

              <select
                className="form-control form-control-lg"
                id="level"
                name="level"
                {...getFieldProps('level')}
              >
                <option style={normalStyle} value={LEVELS.NORMAL}>
                  Normal
                </option>
                <option style={urgentStyle} value={LEVELS.URGENT}>
                  Urgent
                </option>
                <option style={blockingStyle} value={LEVELS.BLOCKING}>
                  Blocking
                </option>
              </select>
              {errors.level && touched.level && (
                <ErrorMessage name="level" component="div" />
              )}

              <button type="submit" className="btn btn-success btn-lg ms-2">
                {lenght > 0 ? 'Add New Task' : 'Create your First Task'}
              </button>
              {isSubmitting ? <p>Adding Task...</p> : null}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskFormik
