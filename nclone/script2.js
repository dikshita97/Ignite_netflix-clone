//api key from TMDB API

const api ="api_key=a259a454ff1c394ff204dd01cc39d4b4";
//base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w185";  // or you can use w300


//requests for movie data
const requests = {

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanticMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};
//used to truncate the string
function truncate(str, n) {     // movie description will get short using truncate function
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
//banner - video playing(on the top)
fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json())


  .then((data) => {
    console.log(data.results);
    //every refresh the movie will be change


    const setMovie = //All the data will be stored in setMovie
      data.results[Math.floor(Math.random() * data.results.length - 1)];  //floor function gives round off value which is the integer value



    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description"); 
    
    banner.style.backgroundImage = 
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innnerText = setMovie.name;  
    
  });


//movies rows
fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json())


  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);


    const title = document.createElement("h2");

    title.classNmae = "row__title";
    title.innerText = "NETFLIX ORIGINALS";


    row.appendChild(title);
    
    //For the movie image
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);


    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className = "row__posterLarge";

        var s = movie.name.replace(/\s+/g, "");  // (/\s+/g, "") - data will get replaced one by one

        poster.id = s;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    });
  });

//trending


//top rated
fetch(requests.fetchTrending)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Top Rated";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);


    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;

        poster.id = s2;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);  //because we want line to line movies
    });
  });


//action
fetch(requests.fetchActionMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Action Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
  }); 

//comedy
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
  }); 

//Horror
fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
  });  
  
//Romance
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
  });   

//Documentary
fetch(requests.fetchDocumentaries)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = " Documentaries";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
  });   
  
  
  
