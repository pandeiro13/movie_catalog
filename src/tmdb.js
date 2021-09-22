const API_KEY = '2a37151e54c4423dae16407bc3be000e';
const API_BASE = 'https://api.themoviedb.org/3';


//aux function to fetch the url ('grabing' the json with the movie's info) and return the json
const simpleFetch = async (endpoint) => { //endpoint is the url
    const req = await fetch(`${API_BASE}${endpoint}`); //will do a fetch to join with our DB. await tells the program to run this line, await for the response we are looking for and only after we get that response go to the next line and run it, instead of running both lines at the same time
    const json = await req.json(); //we did the request in the previous line and now we will 'grab' the json of that request
    return json;
}

export default {
    getFirstList: async () => {
        return [
            {
                slug: 'upcoming',
                title: 'Upcoming',
                items: await simpleFetch(`/movie/upcoming?language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Trending',
                items: await simpleFetch(`/trending/all/week?language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await simpleFetch(`/movie/top_rated?language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await simpleFetch(`/discover/movie?with_genres=28&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await simpleFetch(`/discover/movie?with_genres=35&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'horror',
                items: await simpleFetch(`/discover/movie?with_genres=27&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await simpleFetch(`/discover/movie?with_genres=10749&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'documentaries',
                title: 'Documentaries',
                items: await simpleFetch(`/discover/movie?with_genres=99&language=en-US&api_key=${API_KEY}`)
            },
        ]
    },

    //function to grab info from one specific movie or series. type specifies whether it's a movie or series
    getMovieInfo: async (movieId, type) => {

    }
}