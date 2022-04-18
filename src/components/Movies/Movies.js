import React, { useEffect, useState } from 'react';
import  './Movies.css';
import Movie from '../Movie/Movie';
import Carusel from '../Carusel/Carusel';


const Movies = () => {

const [movies,setMovies]=useState([]);

useEffect(()=>{
fetch('Derector.json')
.then(res=>res.json())
.then(data=>setMovies(data));




},[])

    return (
        <div className='mt-4'>
        <h1 className='title'>Film Maker</h1>
        <h1 className='name'>Mizanur Rahman Aryan</h1> 
        <Carusel></Carusel>
        <h1 className='mt-2'>Natok Made By Him</h1>

              <div className='row d-flex justify-content-center'>
              {
                movies.map(movie=><Movie movie={movie}></Movie>)
              }
              </div>


        </div>
    );
};

export default Movies;