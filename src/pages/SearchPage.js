import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import Search from '../components/Searching/Search';

const SearchPage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Search />
      <Footer />
    </div>
  );
};

export default SearchPage;
