import PropTypes from 'prop-types';
import React from 'react';

const Post = function ({ author, body }) {
  return (
    <div className="Post">
      <div className="Author">
        {author}
      </div>
      <div className="Postbody">
        {body}
      </div>
      <hr />
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
