import React from 'react';
import ImageLoader from './ImageLoader';

function BlogCard(props) {
  const { post } = props;

  return (
    <div className="blog-card" key={post.id}>
      <ImageLoader src={`https://picsum.photos/id/${post.id}/400/300`} alt={post.title} />
      <div className="blog-card-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <div className="blog-card-details">
          <span className="blog-card-author">John Doe</span>
          <span className="blog-card-date">01/05/2023</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
