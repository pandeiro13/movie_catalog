import './App.css';
import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import MovieGenre from './components/MovieGenre';
import HighlightedMovie from './components/HighlightedMovie';
import Header from './components/Header';

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [highlightedData, setHighlightedData] = useState(null);
    const [colouredHeader, setColouredHeader] = useState(false); //this is where we create the variable to tell the program to colour the header when we scroll down

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

    useEffect(() => { //this is where we make the program check if we have indeed scrolled down or if we are in the top of the page so that it can colour the header
        const didScroll = () => {
            if(window.scrollY > 10) { //if we scroll down enough, then the header will be coloured
                setColouredHeader(true);
            } else {
                setColouredHeader(false)
            }
        }
        window.addEventListener('scroll', didScroll);

        return () => {
            window.removeEventListener('scroll', didScroll)
        }
    }, []);

    return (
        <div className="App"> 

            <Header coloured={colouredHeader} /> {/* we only want the header to be coloured when we scroll down, so we have to create a variable that tells the program to do that and then we need to pass it here as a prop */}
        
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


            {/*we only want the loading gif to appear while the page is actually loading (when and/or if the movie lists are empty), so we have to create a condition for that */}
            {
            movieList.length <= 0 &&
            <div className='loading'>
                <img src='https://deborapsol.com.br/themes/debora/images/loader.gif' alt='Loading...' /> 
                {/*https://lh3.googleusercontent.com/proxy/KZfEX5W44Jxm0omY6YDqH4NO6tbOeqHH-nlGgz7ha3kRiYoQKdMKcPCON5fI-96snMtSSbapN5m91lLSg8plZ9HNffh5CoaNfVvOAoP0_ExhuR5N2qApahDmZjCUDSQ4lJQwNtk2Uh6mSbErAatg8bg 
                -
                https://www.gaussiansolutions.com/images/loader.gif
                -
                https://www.themuffler.co.uk/The_Muffler/images/layout/progress.gif */}
            </div>
            }

            <footer>
                This product uses the TMDb API but is not endorsed or certified by TMDb.
                <br />
                <br />
                <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg' />
                {/* <br />
                <p> </p> */}
            </footer>
        </div>
    );
}