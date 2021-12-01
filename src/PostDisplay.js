import React, { useState, useEffect } from 'react';
import Post from './Post';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

const PostsDisplay = function () {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState('');
  const [postbody, setPostbody] = useState('');

  const getPosts = () => {
    base('Posts').select({ view: 'Grid view' }).all()
      .then((records) => {
        setPosts(records);
      });
  };

  useEffect(getPosts, []);

  const printposts = posts.map((post) => (
    <Post
      key={post.id}
      author={post.fields.Author}
      body={post.fields.Body}
    />
  ));

  const submit = function (evt) {
    evt.preventDefault();
    base('Posts').create([
      {
        fields: {
          Body: postbody,
          Author: author,
        },
      },
    ], (err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach((record) => {
        console.log(record.getId());
      });
    });
    getPosts();
  };

  const form = (
    <form className="Tweet" method="post" onSubmit={submit}>
      <input type="text" id="postbody" name="postbody" placeholder="What's happening" onChange={(e) => setPostbody(e.target.value)} />
      <br />
      <label htmlFor="author">
        Author:
        <br />
        <input type="text" id="author" name="author" onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <br />
      <input className="Printbutton" type="submit" value="Print" />
    </form>
  );

  return (
    <div className="App">
      <h1 className="Title">Printer</h1>
      {form}
      <br />
      <div className="Posts">
        {printposts}
      </div>
    </div>
  );
};

export default PostsDisplay;
