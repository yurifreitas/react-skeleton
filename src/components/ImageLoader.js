import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import { Blurhash } from 'react-blurhash';

const ImageLoader = ({ src, alt, hash }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleBlurhashLoaded = () => {
    setIsLoading(false);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const handleBlurhashError = () => {
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
      {hash && (
        <Blurhash
          hash={hash}
          width="100%"
          height={400}
          onLoad={handleBlurhashLoaded}
          onError={handleBlurhashError}
        />
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
