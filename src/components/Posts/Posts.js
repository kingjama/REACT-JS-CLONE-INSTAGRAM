import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { posts } = props;

  return (
    <div className='posts-container-wrapper'>

<ul> {posts.map(function(hello) {return <li> {hello}</li>})
  }  </ul>
  
<Post post={posts} />   </div>
  );
};

export default Posts;
