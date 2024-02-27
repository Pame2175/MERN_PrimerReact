// PersonCard.jsx
import React from 'react';

function PersonCard(props) {
  const { firstName, lastName, age, hairColor } = props;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15', margin: '5px', width: '300px' }}>
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
}

export default PersonCard;
