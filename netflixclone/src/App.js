import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [movieList, setMovieList] = useState([]);


    useEffect(()=>{
        const loadAll = async() => {
            //pegando a lista ToTAL
            let list = await Tmdb.getHomeList();
            console.log(list);
        }

        loadAll();
    }, []);

    return (
        <div className="page">
            <section className="lists">
                {movieList.map((item, key)=>(
                    <MovieRow Key={key} title={item.title} items={item.items} />
                ))}
            </section>
        </div>
    );
}