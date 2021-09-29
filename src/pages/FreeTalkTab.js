import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import FreeTalk from '../components/freetalk/FreeTalk';

const FreeTalkTab = () => {
  return (
    <div style={{ backgroundColor: '#ccc' }}>
      <Header />
      <Navigation />
      <FreeTalk />
      <Footer />
    </div>
  );
};

export default FreeTalkTab;
