//imports, useeffect, people fetch, people card
import React, { useEffect } from 'react';
//link?
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../redux/reducer';
import PeopleCard from './PeopleCard';

const People = () => {
  const dispatch = useDispatch();
  ////ughhhhh is this where my problem is??//UPDATE: the answer was yes. state.people.loading. not state.loading.
  const loading = useSelector((state) => state.people.loading);
  const people = useSelector((state) => state.people.people);
  const error = useSelector((state) => state.people.error);
  
  //useEffect for fetchin the poops
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  //if loading - show super cool loading message
  if (loading) {
    return <div><h1>Loading data, please wait...</h1></div>;
  }
//show the frickin error!
  if (error) {
    return <div><h1>{error}</h1></div>;
  }

  //if theres no people, say you're sorry!
  if (!people.length) {
    return <div>Sorry, no people found</div>;
  }

  //render all the peopless

  //Layout should be like...
  //header for logo div that has the title and maybe an icon??

//useLink to nav to createpeeps form component with button.
//container? div
//then somehow loop the people from fetchpeeple to their own peoplecards

//map!!! map has the second index param to set keys


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

//export it
export default People;