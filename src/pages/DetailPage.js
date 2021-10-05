import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import Detail from '../components/details/Detail';
// import DetailContainer from '../container/DetailContainer';

const DetailPage = () => {
  return (
    <div style={{ backgroundColor: '#ccc' }}>
      <Header />
      <Navigation />
      {/* <DetailContainer /> */}
      <Detail />
      <Footer />
    </div>
  );
};

export default DetailPage;
