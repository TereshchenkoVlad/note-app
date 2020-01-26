import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebse = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      firebse.addNote(value.trim())
      .then(() => {
        alert.show('Note was create successfully!', 'success')
      })
      .catch(() => {
        alert.show('Something went wrong!', 'danger')
      })
      
      setValue('')
    } else {
      alert.show('First you need enter the text!')
    }

  }

  return (
    <form onSubmit={submitHandler}>
        <div className='form-group'>
            <input 
                className='form-control' 
                type='text'
                placeholder='Please enter a name of note...'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    </form>
  )
}

export default Form
