import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../redux/reducer';
import PeopleCard from './PeopleCard';

const People = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const people = useSelector((state) => state.people);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  if (loading) {
    return <div><h1>Loading data, please wait...</h1></div>;
  }

  if (error) {
    return <div><h1>{error}</h1></div>;
  }

  if (!people.length) {
    return <div>Sorry, no people found</div>;
  }

  return (
    <section className="mainSection">
      <header className="pageHeader">
        <div>
          <div id = "logobox">
          <h1 id="logo">WhoDis?</h1>
          </div>
          <Link to="/create">
            <button type="button" className="makeOne">Make your own!</button>
          </Link>
        </div>
      </header>
      <div className="personContainer">
        {people.map((person, i) => (
          <PeopleCard key={i} info={person} />
        ))}
      </div>
    </section>
  );
};

export default People;