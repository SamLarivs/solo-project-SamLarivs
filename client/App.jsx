import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import People from './components/People';
import CreatePerson from './components/CreatePerson';
import './stylesheets/styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<People />} />
            <Route path="/create" element={<CreatePerson />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
