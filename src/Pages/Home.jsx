import React from 'react';
import NavBar from '../Components/NavBar';
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';

const Home = () => {
  return <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
  </div>;
};

export default Home;
