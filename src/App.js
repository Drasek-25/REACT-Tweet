import React from 'react';
import './App.css';
import NameWithHandle from './components/NameWithHandle';
import Time from './components/Time';
import Message from './components/Message';
import ButtonBar from './components/ButtonBar';
import Avatar from './components/Avatar';


function App() {
  return (
    <div className="app row">
      <div className='col avatar'>
        <Avatar />
      </div>
      <div className='col'>
        <div className='row'>
          <NameWithHandle /> <div className='dot'></div><Time />
        </div>
        <div className='row message'>
          <Message />
        </div>
          <ButtonBar/>
      </div>
    </div>
  );
}

export default App;
