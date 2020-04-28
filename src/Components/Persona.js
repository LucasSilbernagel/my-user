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
    // <li onClick={deleteItem}>{props.user}</li>
    <ul onClick={deleteItem}>
      <li>Name: {props.user.name}</li>
      <li>Age: {props.user.age}</li>
    </ul>
  )
}

export default Persona