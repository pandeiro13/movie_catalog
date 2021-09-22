import './movieGenre.css';
import React from 'react';
// this are the props. don't forget the {}
export default ({ title, items }) => {
    return (
        <div className='slidingListGeneral'> {/*it's the whole sliding list space, from the title to the images */}
            <h2>{title}</h2>
            <div className='slidingListArea'> {/* this will be the slinding list where we will see the movies' posters to click on. we need to map them if there is any movie on the list*/}
                <div className='slidingListItself'>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='slidingListItem'> {/*the movies' posters individually*/}
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} /> {/* //the url in the API is not complete, so we have to do it. https://image.tmdb.org/t/p/ is the part we added. w300 is the width of the image - i tried w100 and it didn't work, I don't know why. the rest is what comes from the API itself concatened with the url we added to make the full one */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}