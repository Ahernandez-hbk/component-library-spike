import React from 'react';
import './App.css';
import Tabs from './Components/BasicTabs';
import AntdTabs from './Components/AntdTabs';

function App() {
  return (
    <div className="app">
      <Tabs />
      <AntdTabs />
    </div>
  );
}

export default App;
