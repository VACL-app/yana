import React from 'react'
import ButtonDefault from '../components/ButtonDefault';
import Validation from 'react-validation';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
}

function submitSignUp(event, onSignUp) {
  // Stop usual browser form submission
  event.preventDefault()

  // Get <form>
  const form = event.target
  // Get values from the field
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  // Call the onSignIn function with our values
  onSignUp({ email, password })
}

export default function SignUpForm({
  onSignUp
}) {
  return (

        <form
          onSubmit={ (event) => submitSignUp(event, onSignUp) }
          style={ formStyle }>
          <div>
            <label>
              <span>Email </span>
              <input name='email' />
            </label>
            <br/>
            <label>
              <span>Password </span>
              <input type='password' name='password' />
            </label>
            </div>
          <div className="learn-now-button-container text-center">
            <button className="btn thin-btn">Join</button>
          </div>
        </form>
    )
  }
