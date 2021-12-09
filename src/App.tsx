import React from 'react';
import './App.css';
import AnalyticsView from './views/public-views/Analytics';
import FooterCom from 'shared/footer';
import HeaderCom from 'shared/header';

function App() {
  return (
    <>
      <HeaderCom/>
      <AnalyticsView/>
      <FooterCom/>
    </>
  );
}

export default App;
