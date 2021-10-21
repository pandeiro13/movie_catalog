import React from "react";
import './Headercss.css';

export default ({coloured}) => { //this is the prop passed when we call the Header component in the App
    return (
        <header className={coloured ? 'headerColoured' : ''}>
            <div className='logo'>
                <a href='/'>
                    <img src='/moviecatalog.png' alt='logo' /> 
                </a>
            </div>
            <div className='profilePic'>
                
                    <img src='/profilePic.png' alt='profilePic'/>
                
            </div>
        </header>
    );
}