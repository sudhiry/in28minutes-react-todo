import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('FooterComponent', () => {

    it('should get rendered', () => {
        shallow(<Component />);
    });
    
});