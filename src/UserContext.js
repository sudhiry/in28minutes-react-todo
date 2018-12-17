import React from 'react';

export default React.createContext({
    isAuthenticated: false,
    username: '',
    email: '',
    login: () => {},
    logout: () => {}
});