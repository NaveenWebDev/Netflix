import React, { useEffect, useState } from "react";

const List = () => {
  const [cato, setCato] = useState([]);

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
              console.log(data.results[0].backdrop_path)
          })
  }
  console.log(cato)

  return (
    <>
      {
        cato.map((value) => { 
          return(
        <div className="border border-red-700">
          <h2 className="text-2xl font-bold">{value.name}</h2>
          <div className="border border-blue-500 overflow-x-scroll">

          <div className="img w-[200px] bg-slate-500 flex m-2 gap-3">
            <img 
              src="https://koimoi.com/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg" 
              alt="moviePoster" 
              height="100%"
              width="100%"
            />
            <img 
              src="https://koimoi.com/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg" 
              alt="moviePoster" 
              height="100%"
              width="100%"
            />
          </div>

          </div>
        </div>
          )
      })}
    </>
  );
};

export default List;
