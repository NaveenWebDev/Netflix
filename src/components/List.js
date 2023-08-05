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
            // if (Array.isArray(categories) && categories.length){
                //     categories.forEach(category => {
                    //         fetchAndbuildMovieSection(apiPaths.fetchMoviesList(category.id));
          //     });
          // }
          setCato(categories);
        })
        .catch((err) => console.error(err));
  }, []);

  // function fetchAndbuildMovieSection(categories){
  //     fetch(categories)
  //         .then(res=>res.json())
  //         .then(data=> {
  //             console.log(data.results)
  //         })
  // }

  return (
    <>
      {
        cato.map((value) => {
        <div className="border border-red-700 h-[250px]">
          <h2 className="text-2xl font-bold p-1">{value}</h2>
          <div className="img border border-blue-500"></div>
        </div>;
      })}
    </>
  );
};

export default List;
