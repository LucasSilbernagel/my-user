import React from 'react'
import firebase from './firebase'

function Persona(props) {

  // Delete persona when close button is clicked
  const deleteItem = () => {
    const itemRef = firebase.database().ref(props.personaId)
    itemRef.remove()
  }

  // Add each new persona to the list on the page
  return (
    <div className="persona-container">
      <span className="delete-item" aria-label="delete persona" onClick={deleteItem}>&times;</span>
      <ul className="created-persona">
        <li className="emoji-li">{props.user.emoji}</li>
        <li><span className="bold">Name:</span> {props.user.name}</li>
        <li><span className="bold">Age:</span> {props.user.age}</li>
        <li><span className="bold">Region:</span> {props.user.region}</li>
        <li><span className="bold">Occupation:</span> {props.user.occupation}</li>
        <li><span className="bold">Education:</span> {props.user.education}</li>
        <li><span className="bold">Comfort level with modern technology (internet, computers, mobile devices, etc.):</span> {props.user.tech}</li>
        <li><span className="bold">Wants:</span> {props.user.wants}</li>
        <li><span className="bold">Challenges:</span> {props.user.challenges}</li>
        <li><span className="bold">Other:</span> {props.user.other}</li>
      </ul>
    </div>
  )
}

export default Persona