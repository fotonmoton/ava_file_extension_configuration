import React from 'react';
import { hot } from 'react-hot-loader/root';

import './App.css';
import kitten from './kitten.jpg';

interface MessageProps {
  message: string;
}

const Hello: React.SFC<MessageProps> = ({ message }) => (
  <p>{message}</p>
);

const App = () => (
  <div className="App">
    <Hello message="Hello from React!" />
    <img src={kitten} alt="" />
  </div>
);

export default hot(App);
