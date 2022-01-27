const API_KEY = "67fa31cca59e9d01e89827ba875b387f"

const url = {
    trending:`/trending/all/day?api_key=${API_KEY}&language=en-IN`,
    netflixOrignals:`discover/tv?api_key=${API_KEY}&with_network=213`,
    topRated:`/movie/top_rated?api_key=${API_KEY}`,
    actionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrerMovie:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovie:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default url