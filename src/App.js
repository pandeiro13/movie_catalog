import './App.css';
import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import MovieGenre from './components/MovieGenre';
import HighlightedMovie from './components/HighlightedMovie';

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [highlightedData, setHighlightedData] = useState(null);

    useEffect(() => {//when the screen loads, it will execute this function

        const loadAll = async () => { 
            //we will grab the whole list we created on the other component
            let list = await tmdb.getFirstList();
            setMovieList(list);

            //here we will grab the highlighted movie that will appear on the top of the screen
            let highlighted = list.filter(h => h.slug === 'series'); //we are filtering the list of the movies so that the higlighted movie will always be from the series category and we do it by filtering by the slug property
            let randomMovie = Math.floor(Math.random() * (highlighted[0].items.results.length - 1));
            let chosen = highlighted[0].items.results[randomMovie];
            // console.log(chosen)
            let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
            setHighlightedData(chosenInfo)

        }
        loadAll();
    }, []);

    return (
        <div className="App"> 
        
            {highlightedData && 
                <HighlightedMovie item={highlightedData} />
            }

            <section className="list"> {/*we are going to map the movieList (recomended, horror, comedy...) array (basically to loop through it) */}
                { 
                    movieList.map((item, key) => ( 
                    <div>
                        <MovieGenre key={key} title={item.title} items={item.items} />
                       {/* {item.title} => this comes from the getFirstList. we are creating a component with our list and that component will be called here to show up in the page. title and items are the props we are passing here and we will receive in the other component */}
                    </div>
                ))}
            </section>
        </div>
    );
}