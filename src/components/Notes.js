import React, { useContext } from 'react'
import moment from 'moment'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'

const Notes = ({ notes, onRemove }) => {

  const alert = useContext(AlertContext)

  const onDelete = async id => {
    await onRemove(id)
    alert.show('Note was delete successfully!', 'secondary')
  }

  return (
    <TransitionGroup component='ul' className='list-group'>
        { notes.map(note => (
          <CSSTransition 
            key={note.id}
            classNames={'note'}
            timeout={800}
          >
              <li className='list-group-item note'>
                  <div className='note-item'>
                      <strong>{ note.title }</strong>
                      <small>{ moment(note.date).calendar() }</small>
                  </div>
                  <button 
                    onClick={() => onDelete(note.id)} 
                    type='button' 
                    className='btn btn-outline-danger btn-sm'>&times;</button>
              </li>
          </CSSTransition>
        )) }
    </TransitionGroup>
  )
}

export default Notes
