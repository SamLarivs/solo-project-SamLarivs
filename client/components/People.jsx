import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PeopleCard from '/Users/samlarivs/Codesmith/solo-project-SamLarivs/client/components/PeopleCard.jsx';

const People = () => {
  const [people, setPeople] = useState([]);
  const [fetchedPeople, setFetchedPeople] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/'); // Ensure the URL matches your backend
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data
        setPeople(data);
        setFetchedPeople(true);
      } catch (err) {
        console.error('Failed to fetch people data:', err);
        setError('Failed to fetch people data.');
      }
    };

    fetchPeople();
  }, []);

  if (!fetchedPeople) {
    return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  if (!people.length) {
    return (
      <div>Sorry, no people found</div>
    );
  }

  return (
    <section className="mainSection">
      <header className="pageHeader">
        <h2>People</h2>
        <Link to="/create">
          <button type="button" className="btnSecondary">
            Create Person
          </button>
        </Link>
      </header>
      <div className="PersonContainer">
        {people.map((person, i) => (
          <PeopleCard key={i} info={person} />
        ))}
      </div>
    </section>
  );
};

export default People;