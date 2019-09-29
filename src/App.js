import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div></div>
      <div className='image-wrapper'>
        <div className='row'>
          <img
            className='item-one'
            src={`https://jodie.lekoarts.de/static/af6ce265576ce67a77b7ae1ec6e94476/8fba5/projects-color-001.webp`}
          />
          <img
            className='item-two'
            src={`https://jodie.lekoarts.de/static/d76433afdc3d6ca1afacc71eaf05c9e0/8fba5/projects-breakfast-001.webp`}
          />
        </div>
        <div className='row'>
          <img
            src={`https://jodie.lekoarts.de/static/5f448974c79302fba9a2543771cd8070/8fba5/projects-neon-001.webp`}
          />
          <img
            src={`https://jodie.lekoarts.de/static/235a268caca73ffe1c00085758f5b9d2/8fba5/projects-bw-001.webp`}
          />
          <img
            src={`https://jodie.lekoarts.de/static/647101c86116531fad84d754760e7b58/8fba5/projects-color-002.webp`}
          />
        </div>
        <div className='row'>
          <img
            src={`https://jodie.lekoarts.de/static/7b0f3f773d4ad7a8deb755de22975dc8/8fba5/projects-bw-004.webp`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
