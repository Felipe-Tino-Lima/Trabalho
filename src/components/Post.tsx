import React from 'react';

interface PostProps {
  username: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ username, content }) => {
  return (
    <div className="post">
      <h3>{username}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Post;