//imports usestate, dispatch, addpeeps

import React, { useState } from 'react';
///Dispatch
import { useDispatch } from 'react-redux';
import { addPerson } from '../redux/reducer'; 
//how the heck do I make this go back to main after the create click?
//use NAVIGATE?!
import { useNavigate } from 'react-router-dom';

const CreatePerson = () => {
  //init dispatch
  const dispatch = useDispatch();
  //init navigate
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    hobby: '',
    fav_food: '',
    image: '',
  });

  const handleChange = (e) => {
    //destructure name/ value from target
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //onsubmit dispatch the input data to the addperson action
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPerson(formData)).then(() => {
      // Navigate back to the main page!!!! heck yeah
      navigate('/');
    });
    setFormData({ 
      name: '',
      age: '',
      occupation: '',
      hobby: '',
      fav_food: '',
      image: '',
    });
  };

//build creator route
//should have like an h2
//form element
//inputs:
//name, age, occ, hobb, food, image

  return (
    <div className="creator">
      <h2 id="createh2">Create a New Person!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} />
        <input type="text" name="hobby" placeholder="Hobby" value={formData.hobby} onChange={handleChange} />
        <input type="text" name="fav_food" placeholder="Favorite Food" value={formData.fav_food} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <button type="submit">Create Person</button>
      </form>
    </div>
  );
};

//EXPORT!!!
export default CreatePerson;