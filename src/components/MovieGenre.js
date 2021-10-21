import './movieGenre.css';
import React, {useState} from 'react';
import * as MdIcons from 'react-icons/md';



// this are the props. don't forget the {}
export default ({ title, items }) => {

    const [scrollList, setScrollList] = useState(0);

    const goLeft = () => {
        let x = scrollList + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0
        }
        setScrollList(x);
    }

    const goRight = () => {
        let x = scrollList - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 200 //this is the size of the list
        let y = window.innerWidth - listWidth 
        if (y > x) {
            x = y - 20 //this 20 is just to have a little margin on the right when we have it fully scrolled to the right
        }
        setScrollList(x)
    }



    return (
        <div className='slidingListGeneral'> {/*it's the whole sliding list space, from the title to the images */}
            <h2>{title}</h2>

            <div className='navigateLeft' onClick={goLeft}>
                <MdIcons.MdNavigateBefore style={{fontSize: 50}}/>
            </div>

            <div className='navigateRight' onClick={goRight}>
                <MdIcons.MdNavigateNext style={{fontSize: 50}}/>
            </div>

            <div className='slidingListArea'> {/* this will be the slinding list where we will see the movies' posters to click on. we need to map them if there is any movie on the list*/}
                <div className='slidingListItself' style={{marginLeft: scrollList, width: items.results.length * 200}}>
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