import React from 'react';
import './App.css'; // Import the CSS file for the main component
import Banner from './Components/Banner';
import Header from './Components/Page/Header';


const App = () => {

  return (
    <div>
      <Header/>
      <Banner/>
    </div>
  );
};

export default App;
