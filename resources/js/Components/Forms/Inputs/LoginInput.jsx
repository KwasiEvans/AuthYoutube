import React from 'react'
import './styles.css'

export default function LoginInput({placeholder, type, name}) {
  return (
    <div className='inputwrap'>
        <input type={type}
         className='input_error_border'
         name={name}
         placeholder={placeholder}
        />
    </div>
  )
}
