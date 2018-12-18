import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('ErrorComponent', () => {

    it('should get rendered', () => {
        shallow(<Component />);
    });
    
});