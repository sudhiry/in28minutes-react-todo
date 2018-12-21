import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('TodoComponent', () => {

    it('should get rendered', () => {
        shallow(<Component />);
    });
    
});