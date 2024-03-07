// LogInUser.js
import React from 'react';
import { useUser } from './UserProvider';

const LogInUser = () => {
    const { user } = useUser();

    return (
        <p>Hello <span>{user.name}</span></p>
    );
};

export default LogInUser;
