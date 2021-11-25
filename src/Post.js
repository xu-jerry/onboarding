import PropTypes from 'prop-types';
import React from 'react';

const Post = function ({ author, body }) {
  return (
    <>
      <div>
        Author:
        {author}
      </div>
      <div>
        Body:
        {body}
      </div>
    </>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
