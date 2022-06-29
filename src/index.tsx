
import React from 'react';
import ReactDOM from 'react-dom';
// import GuestList from "./state/GuestList";
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponet';
const App = () =>{
  return <div>
    <h1>Hi There !</h1>
    <EventComponent/>
  </div>
};

ReactDOM.render(<App/>, document.querySelector('#root'));
