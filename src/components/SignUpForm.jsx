import React from 'react'

const SignUpForm = ( props ) => {
  const { username, password, onChange, onSubmit } = props
  return (
    <form onSubmit={ onSubmit } >
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" value={ username } onChange={ onChange } />

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" value={ password } onChange={ onChange } />

      <input type="submit" value="Sign Up" />
    </form>
  )
}

export default SignUpForm