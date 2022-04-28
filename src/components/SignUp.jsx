import React from 'react'
import SignUpForm from './SignUpForm'

const SignUp = ( props ) => {
  const onSubmit = () => {

  }
  return (
    <div>
      <h1>Sign Up:</h1>
      <SignUpForm onSubmit={ onSubmit } onChange={ props.onChange } />
    </div>
  )
}

export default SignUp