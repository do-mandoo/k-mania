import React from 'react';
import FreeTalkHot from './FreeTalkHot';
import FreeTalkMain from './FreeTalkMain';
import FreeTalkSidebar from './FreeTalkSidebar';

const FreeTalk = () => {
  return (
    <>
      <div>
        <h2>Free-Talk</h2>
      </div>
      <FreeTalkMain />
      <FreeTalkSidebar />
      <FreeTalkHot />
    </>
  );
};

export default FreeTalk;
