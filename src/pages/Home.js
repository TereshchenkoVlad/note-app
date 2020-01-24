import React from 'react'
import Form from '../components/Form'
import Notes from '../components/Notes'

const Home = () => {
    const notes = new Array(3)
        .fill('')
        .map((_, i) => ({ id: i, title: `Note ${++i}`}))
  return (
    <>
        <Form />
        <hr/>
        <Notes notes={notes}/>
    </>
  )
}

export default Home
