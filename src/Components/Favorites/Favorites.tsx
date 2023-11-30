import React from 'react';
import s from './Favorites.module.scss'
import data from "../../Redux/store";

function Favorites() {
    return (
        <section className={s.favorites} id="favorites">
            <h2>Favorites</h2>
            <div className={s.pick}>Pick favorites of season</div>
            <ul className={s.seasons}>
                <label htmlFor="r1">
                    <li><input type="radio"  id='r1' name='year'/>Winter</li>
                </label>
                <label htmlFor="r2">
                    <li><input type="radio" id='r2'  name='year'/>Spring</li>
                </label>
                <label htmlFor="r3">
                    <li><input type="radio" id="r3"  name='year'/>Summer</li>
                </label>
                <label htmlFor="r4">
                    <li><input type="radio" id='r4'  name='year'/>Autumn</li>
                </label>
            </ul>
            <div className={s.books}>
                {data.map((book) => (
                    <div className={s.book}>
                        <div className={s.staff}>Staff Picks</div>
                        <div className={s.title}>{book.title}</div>
                        <div className={s.author}>By  {book.author}</div>
                        <div className={s.annotation}>{book.annotation}</div>
                        <button>{book.button}</button>
                        <img src={require('../../img/' + book.img + '.png')} alt={book.img}/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Favorites;