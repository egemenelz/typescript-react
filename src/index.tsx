
import React from 'react';
import ReactDOM from 'react-dom';
// import GuestList from "./state/GuestList";
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponet';
import UserSearch from './refs/UserSearch';
const App = () =>{
  return <div>
    <h1>Hi There !</h1>
    <UserSearch/>
  </div>
};

ReactDOM.render(<App/>, document.querySelector('#root'));
