import React from 'react';
import './App.css';
import PodMembers from './PodMembers'

function App() {
  return (
    <div>
      <header class="bg-white black-80 tc pv4 avenir">
        <img src="/ballena.png" class="w4" alt="avatar"/>
        <h1 class="mt0 mb0 baskerville i fw1 f1">Ballena Pod</h1>
        <h2 class="mt2 mb0 f6 fw4 ttu tracked">Our Members</h2>
      </header>
      <PodMembers/>
    </div>
  );
}

export default App;
