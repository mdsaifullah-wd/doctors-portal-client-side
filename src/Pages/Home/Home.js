import React from 'react';
import About from './About';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <About />
      <Appointment />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
