import React from 'react';
import Disclaimer from '../components/Disclaimer';
import Navigation from '../components/Navigation';


function Home() {
  return (
    <div>
      <Disclaimer/>
      <Navigation/>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
    </div>
  );
}   

export default Home;