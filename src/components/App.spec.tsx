import test from 'ava';
import { mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

test('App should render text', (t) => {
  const wrapper = mount(<App />);
  t.is(wrapper.find('p').text(), 'Hello from React!');
});
