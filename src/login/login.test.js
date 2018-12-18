import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('LoginComponent', () => {

    it('should get rendered', () => {
        shallow(<Component />);
    });

    it('renders welcome message', () => {
        const wrapper = shallow(<Component />);
        const test = <h1>Login!</h1>;
        expect(wrapper).toContainReact(test);
    });
});