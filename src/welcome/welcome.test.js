import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('WelcomeComponent', () => {

    it('should get rendered', () => {
        // requires username as part of url params, which is passed automatically by react-router-rom
        const match = {
            params: {
                username: 'test'
            }
        }
        shallow(<Component match={match} />);
    });

    it('renders welcome message', () => {
        // requires username as part of url params, which is passed automatically by react-router-rom
        const match = {
            params: {
                username: 'test'
            }
        }
        const wrapper = shallow(<Component match={match} />);
        const welcome = <h1>Welcome!</h1>;
        expect(wrapper).toContainReact(welcome);
    });
});