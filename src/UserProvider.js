// UserProvider.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user] = useState({
        name: 'John',
        email: 'john@gmail.com'
    });

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);