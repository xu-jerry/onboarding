import React from 'react';
import Post from './Post';
import './App.css';

// airtable configuration
// const Airtable = require('airtable');

// const airtableConfig = {
//   apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
//   baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
// };
// const base = new Airtable({ apiKey: airtableConfig.apiKey })
//   .base(airtableConfig.baseKey);

const App = function () {
  return (
    <>
      <Post author="Farmer Bob" body="Farmers only" />
      <Post author="Blue" body="Print" />
      <Post author="Printer" body="Not twitter I swear" />
    </>
  );
};

export default App;
