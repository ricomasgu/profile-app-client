import React from 'react'
import LoginForm from './LoginForm'

const Login = ( props ) => {
  const onSubmit = () => {

  }
  return (
    <div>
      <h1>Login:</h1>
      <LoginForm onSubmit={ onSubmit } onChange={ props.onChange } />
    </div>
  )
}

export default Login