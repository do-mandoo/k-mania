import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import News from '../components/news/News';

const NewsTab = () => {
  return (
    <div style={{ backgroundColor: '#ccc' }}>
      <Header />
      <Navigation />
      <News />
      <Footer />
    </div>
  );
};

export default NewsTab;
