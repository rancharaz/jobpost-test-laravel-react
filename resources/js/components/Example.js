import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/app.scss'
function Example() {
    return (
        <nav className='bg-black text-white w-full h-16 text-center justify-center items-center flex'>
            <div className="logo mr-24 uppercase"> Logo</div>

            <ul className='flex gap-10 '>
                <li className='hover:text-cyan-400 cursor-pointer'> Home </li>
                <li> About us </li>
                <li> Gallery </li>
                <li> Contact us </li>
            </ul>

        </nav>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
