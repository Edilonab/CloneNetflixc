/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [FeaturedMovie, setFeatureData] = useState(null);

    useEffect(()=>{
        const loadAll = async() => {

            //pegando a lista ToTAL

            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //petando o Featured

            let originals = list.filter (i=>.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)); 
            let chosen = originals [0].item.results[randomChosen];

            console.log(chosen);
        }

        loadAll();
    }, []);

    return (
        <div className="page">

            {featuredData &&
             <FeaturedMovie item={featuredData} />

            }
            
            <section className="lists">
                {movieList.map((item, key)=>(
                    <MovieRow Key={key} title={item.title} items={item.items} /> 
                ))}
            </section>
        </div>
    );
}