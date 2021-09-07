import React from 'react'
import { Formik } from 'formik'
import register from 'services/register'

export default function Register() {
  return (
    <>
      <h2>Formulario de registro</h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validate={values => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Required username'
          }
          if (!values.password) {
            errors.password = 'Required password'
          } else if (values.password.length < 3) {
            errors.password = 'Length must be greater than 3'
          }
          return errors
        }}
        onSubmit={(values, { setFieldError }) => {
          return register(values).catch(() => {
            setFieldError('username', 'This username is not valid')
          })
        }}
      >
        {({ errors, handleSubmit, handleChange, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
            {errors.username && (
              <small style={{ color: 'red' }}>{errors.username}</small>
            )}
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
            {errors.password && (
              <small style={{ color: 'red' }}>{errors.password}</small>
            )}

            <button type='submit' disabled={isSubmitting} className='btn'>
              Registrarse
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}
