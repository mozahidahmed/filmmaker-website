
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Movie.css';

const Movie = ({movie}) => {
    const {name,img,derector,writher,id}=movie;
    const navigate=useNavigate();
    const navigateToAryanDtls=id=>{
    navigate(`/service/${id}`);
    }
    return (
      <>
     
      <div class="card col-sm-12 col-md-4 justify-center grid">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Natok:{name}</h5>
    <h6 class="card-text"> Derector:{derector}</h6>
    <h6 class="card-text"> Writher:{writher}</h6>
    <button onClick={()=>navigateToAryanDtls(id)} class="btn btn-primary">For Details Aryan</button>
  </div>
</div>
      </>

  






        
    );
};

export default Movie;