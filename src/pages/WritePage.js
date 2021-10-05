import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import Write from '../components/Write/Write';
import WrithActionButtons from '../components/Write/WrithActionButtons';
// import WriteActionButtonsContainer from '../container/WriteActionButtonsContainer';

const WrithPage = () => {
  return (
    <div style={{ backgroundColor: '#ccc' }}>
      <Header />
      <Navigation />
      <Write />
      {/* <WriteActionButtonsContainer /> */}
      <WrithActionButtons />
      <Footer />
    </div>
  );
};

export default WrithPage;
