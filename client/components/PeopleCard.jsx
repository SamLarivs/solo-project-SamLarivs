import React from 'react';

const PeopleCard = ({ info }) => {
  const { name, age, occupation, hobby, fav_food, image } = info;

  return (
    <article className="card charCard">
      <div className="charHeadContainer">
        <h3 className="charName">{name}</h3>
        <img className="Profile-pic" src={image} alt={`${name}'s profile`} />
      </div>
      <ul className="charDetailsList">
        <li className="charDetail">Age: {age}</li>
        <li className="charDetail">Occupation: {occupation}</li>
        <li className="charDetail">Hobby: {hobby}</li>
        <li className="charDetail">Favorite Food: {fav_food}</li>
      </ul>
    </article>
  );
};

export default PeopleCard;