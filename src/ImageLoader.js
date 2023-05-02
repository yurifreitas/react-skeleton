import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';

const ImageLoader = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <ContentLoader
          speed={2}
          width={400}
          height={300}
          viewBox="0 0 400 300"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" width="400" height="300" />
        </ContentLoader>
      )}
      <img
        style={{ display: isLoading ? 'none' : 'block' }}
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
      />
    </div>
  );
};

export default ImageLoader;
