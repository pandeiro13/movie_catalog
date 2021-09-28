import React from "react";
import './Highlighted.css';

export default ({item}) => { //this is the prop that we passed when we called this component in the App.js page
    return (
        <section className='highlightedMovie' style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}> {/*the style is how we will put the background image of the series in the highlighted section of the page. we don't know the size of the user's screen, so we don't want to gize a customized size to the image, we want the original size. this time, we don't want the poster, like we did in the movieGenre component. we will grab the backgroung image that comes from the API*/}
            <div className='highlightedBackground'>{/* {item.original_name}*/}</div> 
        </section>
    )
}