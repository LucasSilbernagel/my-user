import React from 'react'
import firebase from './firebase'

function Persona(props) {

  const deleteItem = () => {
    const itemRef = firebase.database().ref(props.personaId)
    itemRef.remove()
  }

  return (
    // <li onClick={deleteItem}>{props.personaTitle}</li>
    <li onClick={deleteItem}>{props.personaTitle}</li>
  )
}

export default Persona