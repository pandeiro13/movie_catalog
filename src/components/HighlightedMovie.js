import React from "react";
import './Highlighted.css';
// import * as MdIcons from 'react-icons/md';
// import * as BsIcons from 'react-icons/bs';


export default ({ item }) => { //this is the prop that we passed when we called this component in the App.js page

    let premierDate = new Date(item.first_air_date);
    let genresArr = [];

    for (let i in item.genres) {
        genresArr.push(item.genres[i].name)
    }

    let synopsis = item.overview;

    if (synopsis.length > 200) {
        synopsis = synopsis.substring(0, 200)+'...';
    }

    return (
        <section className='highlightedMovie' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}> {/*the style is how we will put the background image of the series in the highlighted section of the page. we don't know the size of the user's screen, so we don't want to gize a customized size to the image, we want the original size. this time, we don't want the poster, like we did in the movieGenre component. we will grab the backgroung image that comes from the API*/}
            <div className='highlightedBackgroundVertical'>

                <div className='highlightedBackgroundHorizontal'>
                    <div className='highlightedName'>{item.original_name}</div>
                    <div className='highlightedInfo'>
                        <div className='highlightedYear'><strong>{/*Premier year:*/}{premierDate.getFullYear()}</strong> </div> {/*because the info that comes from the API regarding the date of the show is only the full date (dd/mm/yyyy) of the first episodes airing, we have to create a new date to get only the year */}
                        <div className='highlightedClassification'><strong>Classification:</strong> {item.vote_average}/10</div>

                        <div className='highlightedSeasons'><strong>Nº of seasons:</strong> {item.number_of_seasons} </div> {/* alternatively we could write "{item.number_of_seasons} temporada{item.number_of_seasons} !== 1 ? 's' : '' "  using a ternary to make the s appear only if the show has more than 1 season */}

                        <div className='highlightedGenres'>
                            <strong>Genre(s):</strong> {genresArr.join(', ') ? genresArr.join(', ') : 'Not Found'}
                        </div>
                    </div>
                    <div className='highlightedSynopsis'>
                        <strong>Synopsis:</strong> {synopsis ? synopsis : 'Not Found'}
                    </div>
                    <div className='highlightedButtons'>
                        <a href={`/watch/${item.id}`} className='watchButton'>► Watch</a>
                        {/* <a href={`/list/add/${item.id}`}><MdIcons.MdAddCircleOutline /> Add to favourites</a> */}
                        <a href={`/list/add/${item.id}`} className='addButton'>   +   </a>

                    </div>

                </div>
            </div>
        </section>
    )
}