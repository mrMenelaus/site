import React from 'react';
import { useEffect } from 'react';
const NotFound = () => {
    useEffect(()=>{window.scrollTo(0,0)},[])
    return (
            <h1 className='center'>
                Страница не найдена!
            </h1>
    );
};

export default NotFound;