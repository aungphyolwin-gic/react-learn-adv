// App.js
import React from 'react';
import { UserProvider } from './UserProvider';
import ContentPage from './ContentPage';

function App() {
    return (
        <div className="App">
            <UserProvider>
                <ContentPage />
            </UserProvider>
        </div>
    );
}

export default App;
