// Page.js
import React from 'react';
import { useUser } from './UserProvider';

const Page = () => {
    const { user } = useUser();

    return (
        <div className="Page">
            <h2>What is Lorem Ipsum</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Necessitatibus culpa, temporibus dolorum, expedita voluptate sit pariatur dignissimos, 
                delectus unde est ad aliquid reiciendis veniam ex odio. Porro dolorem aliquid optio facilis 
                asperiores quasi, debitis veniam repudiandae saepe atque dolore quis impedit id? 
                Quis id enim suscipit nostrum earum molestiae dolorem.
            </p>
            <p>
                Written by <span>{user.name}</span>
            </p>
        </div>
    );
};

export default Page;
