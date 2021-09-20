import React from 'react'
import { Formik } from 'formik'
import register from 'services/register'
import '../styles/Form.css'

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
          <form onSubmit={handleSubmit} className='form-login-register'>
            <label className='form-label'>
              Username:
              <input
                className='form-input'
                placeholder='Username'
                name='username'
                onChange={handleChange}
              />
            </label>
            {errors.username && (
              <small style={{ color: 'red' }}>{errors.username}</small>
            )}
            <label className='form-label'>
              Password:
              <input
                className='form-input'
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
              />
            </label>
            {errors.password && (
              <small style={{ color: 'red' }}>{errors.password}</small>
            )}

            <button
              type='submit'
              disabled={isSubmitting}
              className='btn form-button'
            >
              Registrarse
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}
