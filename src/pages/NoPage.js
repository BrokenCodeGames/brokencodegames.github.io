import React from 'react'
import notFound from './img/404.png'

const NoPage = () => {
    return (
        <div className=" h-auto flex justify-center py-5">
            <img src={notFound} />
        </div>
    );
}

export default NoPage;