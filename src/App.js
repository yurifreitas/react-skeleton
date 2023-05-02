import React, { useState, useEffect } from 'react';
import './App.css';
import BlogCardList from './components/BlogListCart';
import Loading from './components/Loading';
import Header from './components/Header';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    const fetchAuth = async () => {
      // Simulando Authenticação
      const response = await fetch('https://jsonplaceholder.typicode.com/auth');
      const data = await response.json();
      setAuth(data);
      setTimeout(() => setIsLoading(false), 3000); 
    };
    fetchAuth();
  }, []);

  return (
    <div className="App">
      <Header/>
      {isLoading ? (
        <Loading/>
      ) : (
        <BlogCardList auth={auth} />
      )}
    </div>
  );
}

export default App;
