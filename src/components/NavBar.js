import React from 'react';

const NavBar = () => {

    return (
        <>
            <nav className="flex sm:justify-end space-x-4">
                {[
                    ['About', '/'],
                    ['Experience', '/experience'],
                    ['Education', '/education'],
                    ['Contact', '/contact'],
                ].map(([title, url]) => (
                    <a href={url} key={title} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                ))}
            </nav>

            
        </>
    )
}

export default NavBar