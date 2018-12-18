import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('AppComponent', () => {

  it('should create the app without error', () => {
    shallow(<App />);
  });

});
