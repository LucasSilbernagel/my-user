import React from 'react'
import firebase from './firebase'

function Persona(props) {

  // Delete persona when clicked
  const deleteItem = () => {
    const itemRef = firebase.database().ref(props.personaId)
    itemRef.remove()
  }

  // Add new persona to the list on the page
  return (
    <li onClick={deleteItem}>{props.user}</li>
  )
}

export default Persona