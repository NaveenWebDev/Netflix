import React, { useEffect, useState } from "react";

const List = () => {
  const [cato, setCato] = useState([]);
  const [movie, setMovie] = useState([]);

  const apiEndpoint = "https://api.themoviedb.org/3";
  const apikey = "703127aec319a7333d8543d8113944a6";
  const imgPath = "https://image.tmdb.org/t/p/original";
  
  const apiPaths = {
      fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
      fetchMoviesList: (id) =>
      `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
      fetchTrending: `${apiEndpoint}/trending/all/day?api_key=${apikey}&language=en-US`,
    };
    
    useEffect(() => {
      fetch(apiPaths.fetchAllCategories)
        .then((res) => res.json())
        .then((res) => {
            const categories = res.genres;
            if (Array.isArray(categories) && categories.length){
                    categories.forEach(category => {
                            fetchAndbuildMovieSection(apiPaths.fetchMoviesList(category.id));
              });
          }
          setCato(categories);
        })
        .catch((err) => console.error(err));
  }, []);

  function fetchAndbuildMovieSection(categories){
      fetch(categories)
          .then(res=>res.json())
          .then(data=> {
             const movieData = data.results
              setMovie(movieData);
            })
  }

  return (
    <>
      {
        cato.map((value) => { 
          return(
        <div>
          <h2 className="text-2xl font-bold">{value.name}</h2>
          <div className="overflow-x-scroll">

          <div className="img w-[200px] bg-slate-500 flex m-2 gap-3">
          {
            movie.map((value, index)=>{
              return(
            <img 
              key={index}
              src= {imgPath+value.backdrop_path}
              alt="moviePoster" 
              height="100%"
              width="100%"
              className="hover:scale-110 transition-all duration-100"
            />
              )
            })
          }
          </div>

          </div>
        </div>
          )
      })}
    </>
  );
};

export default List;
