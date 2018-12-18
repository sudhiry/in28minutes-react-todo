import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('TodosComponent', () => {

    it('should get rendered', () => {
        shallow(<Component />);
    });
    
});