import React, {useEffect, useState} from 'react';
import s from './Favorites.module.scss'
import data from "../../Redux/store";
import cn from "clsx";

function Favorites() {
    const [season, setSeason] = useState(data.winter)
    const [fade, setFade] = useState(false);
    useEffect(() => {

        // Remove fade-in class after a delay (adjust the duration accordingly)
        const timeout = setTimeout(() => {
            setFade(true);
        });

        // Clear the timeout on component unmount or when the season changes
        return () => clearTimeout(timeout);
    }, [season]);
    const changeSeasonWinter = () => {
       setFade(false)
        setTimeout(()=>{setSeason(data.winter)},500)

    }
    const changeSeasonSpring = () => {
        setFade(false)
        setTimeout(()=>{  setSeason(data.spring)},500)

    }
    const changeSeasonSummer = () => {
        setFade(false)
        setTimeout(()=>{ setSeason(data.summer)  },500)

    }
    const changeSeasonAutumn = () => {
        setFade(false)
        setTimeout(()=>{   setSeason(data.autumn)  },500)

    }

    return (
        <section className={s.favorites} id="favorites">
            <h2>Favorites</h2>
            <div className={s.pick}>Pick favorites of season</div>
            <ul className={s.seasons}>
                <label htmlFor="winter">
                    <li><input type="radio" id='winter' name='year' onChange={changeSeasonWinter} defaultChecked/>Winter</li>
                </label>
                <label htmlFor="spring">
                    <li><input type="radio" id='spring' name='year' onChange={changeSeasonSpring}/>Spring</li>
                </label>
                <label htmlFor="summer">
                    <li><input type="radio" id="summer" name='year' onChange={changeSeasonSummer}/>Summer</li>
                </label>
                <label htmlFor="autumn">
                    <li><input type="radio" id='autumn' name='year' onChange={changeSeasonAutumn}/>Autumn</li>
                </label>
            </ul>
            <div className={`${s.books} ${fade ? s.fadeIn : s.fadeOut}`}>
                {season.map((book, i) => (
                    <div className={s.book} key={i}>
                        <div className={s.staff}>Staff Picks</div>
                        <div className={s.title}>{book.title}</div>
                        <div className={s.author}>By {book.author}</div>
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