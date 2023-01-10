import React, { useEffect, useState } from 'react'
import { doggy } from '../types';

export interface Props {
    dog: doggy;
  }

const Gallery = ({dog}: Props) => {

  const[image, setImage] = useState()

  useEffect(() => {
    const fetchData = async () => { 
    const query = await dog.breed +' dog'
    const data = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_MY_ACCESS_KEY}`);
    const json = await data.json();
    return json;
    }
    fetchData().then(result => {
    setImage(result.results[2].urls.regular)});
    }, []);

    return (
      <main className="gallery">
        <img width='600px' src={image}/>
      </main>
    );
}

export default Gallery;
