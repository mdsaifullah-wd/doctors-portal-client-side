import React from 'react';
import About from './About';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Reviews from './Reviews';
import Services from './Services';
import Footer from '../Shared/Footer';

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <About />
      <MakeAppointment />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
