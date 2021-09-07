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
            <input
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
            <button type='submit' disabled={isSubmitting} className='btn'>
              Registrarse
            </button>
            <span style={{ color: 'red' }}>{errors.username || ''}</span>
          </form>
        )}
      </Formik>
    </>
  )
}
