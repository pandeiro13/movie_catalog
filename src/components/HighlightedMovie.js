import React from "react";
import './Highlighted.css';

export default ({item}) => { //this is the prop that we passed when we called this component in the App.js page
    return (
        <section className='highlightedMovie'>
            <div>{item.original_name}</div>
        </section>
    )
}