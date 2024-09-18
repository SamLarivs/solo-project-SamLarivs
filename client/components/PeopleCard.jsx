// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deletePerson, updatePerson } from '../redux/reducer';

// const PeopleCard = ({ info }) => {
//   const { id, name, age, occupation, hobby, fav_food, image } = info;
//   const dispatch = useDispatch();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({ name, age, occupation, hobby, fav_food, image });

//   const handleDelete = () => {
//     dispatch(deletePerson(id));
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     dispatch(updatePerson({ id, ...formData }));
//     setIsEditing(false);
//   };

//   return (
//     <article className="card personCard">
//       <div className="personHeadContainer">
//         <h3 className="personName">{name}</h3>
//         <img className="personPhoto" src={image} alt={`${name}'s profile`} />
//       </div>
//       <ul className="personDetailsList">
//         <li className="personDetail">Age: {age}</li>
//         <li className="personDetail">Occupation: {occupation}</li>
//         <li className="personDetail">Hobby: {hobby}</li>
//         <li className="personDetail">Favorite Food: {fav_food}</li>
//       </ul>
//       <button onClick={handleDelete}>Delete</button>
//       <button onClick={() => setIsEditing(!isEditing)}>Update</button>

//       {isEditing && (
//         <form onSubmit={handleUpdate}>
//           <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//           <input type="number" name="age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
//           <input type="text" name="occupation" value={formData.occupation} onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} />
//           <input type="text" name="hobby" value={formData.hobby} onChange={(e) => setFormData({ ...formData, hobby: e.target.value })} />
//           <input type="text" name="fav_food" value={formData.fav_food} onChange={(e) => setFormData({ ...formData, fav_food: e.target.value })} />
//           <input type="text" name="image" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
//           <button type="submit">Save Changes</button>
//           <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
//         </form>
//       )}
//     </article>
//   );
// };

// export default PeopleCard;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePerson, updatePerson } from '../redux/reducer';

const PeopleCard = ({ info }) => {
  const { id, name, age, occupation, hobby, fav_food, image } = info;

  console.log("Person ID:", id);

  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name, age, occupation, hobby, fav_food, image });

  console.log("Person ID:", id);

  const handleDelete = () => {
    dispatch(deletePerson(id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatePerson({ id, ...formData }));
    setIsEditing(false);
  };

  return (
    <article className="card personCard">
      <div className="personHeadContainer">
        <h3 className="personName">{name}</h3>
        <img className="personPhoto" src={image} alt={`${name}'s profile`} />
      </div>
      <ul className="personDetailsList">
        <li className="personDetail"><strong>Age:</strong> {age}</li>
        <li className="personDetail"><strong>Occupation:</strong> {occupation}</li>
        <li className="personDetail"><strong>Hobby:</strong> {hobby}</li>
        <li className="personDetail"><strong>Favorite Food:</strong> {fav_food}</li>
      </ul>
      <div className="buttonBar">
      <button onClick={handleDelete} className="btnDelete">Delete</button>
      <button onClick={() => setIsEditing(!isEditing)} className="btnUpdate">Update</button>
      </div>
      {isEditing && (
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name"><strong>Name:</strong></label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            placeholder="Name" 
          /></div>
          <div>
            <label htmlFor="age"><strong>Age:</strong></label>
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={(e) => setFormData({ ...formData, age: e.target.value })} 
            placeholder="Age" 
          /></div>
          <div>
          <label htmlFor="occupation"><strong>Occupation:</strong></label>
          <input 
            type="text" 
            name="occupation" 
            value={formData.occupation} 
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} 
            placeholder="Occupation" 
          /></div>
          <div>
          <label htmlFor="hobby"><strong>Hobby:</strong></label>
          <input 
            type="text" 
            name="hobby" 
            value={formData.hobby} 
            onChange={(e) => setFormData({ ...formData, hobby: e.target.value })} 
            placeholder="Hobby" 
          /></div>
          <div>
          <label htmlFor="fav_food"><strong>Favorite Food:</strong></label>
          <input 
            type="text" 
            name="fav_food" 
            value={formData.fav_food} 
            onChange={(e) => setFormData({ ...formData, fav_food: e.target.value })} 
            placeholder="Favorite Food" 
          /></div>
          <div>
          <label htmlFor="image"><strong>Image Url:</strong></label>
          <input 
            type="text" 
            name="image" 
            value={formData.image} 
            onChange={(e) => setFormData({ ...formData, image: e.target.value })} 
            placeholder="Image URL" 
          /></div>
          <div>
          <button type="submit">Save Changes</button>
          <button id="cancelUpdate" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    </article>
  );
};

export default PeopleCard;