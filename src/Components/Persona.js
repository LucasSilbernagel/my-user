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
    <div>
      <span onClick={deleteItem}>&times;</span>
      <ul className="created-persona">
        <li>Name: {props.user.name}</li>
        <li>Age: {props.user.age}</li>
        <li>Region: {props.user.region}</li>
        <li>Occupation: {props.user.occupation}</li>
        <li>Education: {props.user.education}</li>
        <li>Comfort level with modern technology (internet, computers, mobile devices, etc.): {props.user.tech}</li>
        <li>Wants: {props.user.wants}</li>
        <li>Problems: {props.user.problems}</li>
        <li>Other: {props.user.other}</li>
      </ul>
    </div>
  )
}

export default Persona