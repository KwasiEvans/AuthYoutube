import LoginForm from '@/Components/Forms/LoginForm'
import React from 'react';
import './styles.css';

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="login_wrapper">
            <LoginForm />
        </div>
      </div>
    </>
  )
}
