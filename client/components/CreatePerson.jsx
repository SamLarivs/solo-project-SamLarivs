import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../redux/reducer'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreatePerson = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    hobby: '',
    fav_food: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPerson(formData)).then(() => {
      // Navigate back to the main page after successful submission
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

export default CreatePerson;