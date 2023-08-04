import React, { useState } from 'react'
import Header from './BannerHeader'
const Banner = () => {
  const apiEndpoint = "https://api.themoviedb.org/3";
  const apikey = "703127aec319a7333d8543d8113944a6";
  const imgPath = "https://image.tmdb.org/t/p/original";

const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList: (id) => `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
    fetchTrending:`${apiEndpoint}/trending/all/day?api_key=${apikey}&language=en-US`
}


function init(){
  fetchAndBuildAllSections()
}

function fetchAndBuildAllSections(){
  fetch(apiPaths.fetchAllCategories)
  .then(res => res.json())
  .then(res => {
      const categories = res.genres;
      if (Array.isArray(categories) && categories.length){
          categories.forEach(category => {
              fetchAndbuildMovieSection(apiPaths.fetchMoviesList(category.id));
          });
      }
      console.log(categories);
  })
  .catch(err=>console.error(err));
}

function fetchAndbuildMovieSection(categories){
  fetch(categories)
    .then(res=>res.json())
    // .then(data=> console.log(data.results))
}

window.addEventListener("load",function(){
  init();
})



  return (
    <div className='bg-black text-white'>
        <Header></Header>
    </div>
  )
}

export default Banner