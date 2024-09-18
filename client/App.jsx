import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import People from '/Users/samlarivs/Codesmith/solo-project-SamLarivs/client/components/People.jsx';
// import CreatePerson from './components/CreatePerson';

import './stylesheets/styles.css';

const App = () => {
  return (
    <Router>
      <div className="router">
        <main>
          {/*
            NOTE: The syntax below is for React-Router
              - A helpful library for routing with a React app.
              You can learn more about this at:
              https://reactrouter.com
          */}
          <Routes>
            <Route
              path="/"
              element={<People />}
            />
            {/* Uncomment this section to add the CreatePerson route */}
            {/* <Route
              path="/create"
              element={<CreatePerson />}
            /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;