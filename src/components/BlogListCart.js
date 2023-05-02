import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';

import BlogCard from './BlogCard';
const BlogCardList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
            setIsLoading(false);
        };
        fetchPosts();
    }, []);

    return (
        <div className="blog-card-list">
            {isLoading ? (
                Array.from({ length: 16 }).map((_, index) => (
                    <div className="blog-card" key={index}>
                      <ContentLoader viewBox="0 0 300 475" height={475} width={300} >
                        <rect x="260" y="410" rx="4" ry="4" width="50" height="8" />
                        <rect x="50" y="410" rx="4" ry="4" width="50" height="8" />
                        <rect x="90" y="310" rx="4" ry="4" width="160" height="20" />
                        <rect x="50" y="350" rx="5" ry="5" width="250" height="10" />
                        <rect x="50" y="370" rx="5" ry="5" width="250" height="10" />
                        <rect x="50" y="390" rx="5" ry="5" width="250" height="10" />
                        <rect x="70" y="0" rx="5" ry="5" width="200" height="300" />
                      </ContentLoader>
                    </div>
                ))

            ) : (
                posts.map(post => <BlogCard key={post.id} post={post} />)
            )}
        </div>
    );
};

export default BlogCardList;
