import React, {useState} from "react";
import s from "./About.module.scss";
import abo1 from "../../img/about-image-1.png";
import abo2 from "../../img/about-image-2.png";
import abo3 from "../../img/about-image-3.png";
import abo4 from "../../img/about-image-4.png";
import abo5 from "../../img/about-image-5.png";
import arrow from "../../img/Carret_Left.png";
import cn from "clsx";

function About() {
    const [page, setPage] = useState(1);
    return (
        <section className={s.about} id="about">
            <h2>About</h2>
            <div className={s.some_text}>
                The Brooklyn Library is a free workspace, a large number of books and a
                cozy coffee shop inside
            </div>

            <div
                className={cn(s.images, {[s.images1]: page === 1}, {[s.images2]: page === 2}, {[s.images3]: page === 3},
                    {[s.images4]: page === 4}, {[s.images5]: page === 5})}>
                <div><img src={arrow} alt="arrow-left"/></div>
                <div><img src={abo1} alt="abo1"/></div>
                <div><img src={abo2} alt="abo2"/></div>
                <div><img src={abo3} alt="abo3"/></div>
                <div><img src={abo4} alt="abo2"/></div>
                <div><img src={abo5} alt="abo3"/></div>
                <div><img src={arrow} alt="arrow-right"/></div>

            </div>
            <div className={s.carousel_pagination}>
                <div
                    className={page === 1 ? s.carousel_button_active : s.carousel_button}
                    onClick={() => {
                        setPage(1);
                    }}
                />
                <div className={page === 2 ? s.carousel_button_active : s.carousel_button}
                     onClick={() => {
                         setPage(2);
                     }}/>
                <div className={page === 3 ? s.carousel_button_active : s.carousel_button}
                     onClick={() => {
                         setPage(3);
                     }}/>
                <div className={page === 4 ? s.carousel_button_active : s.carousel_button}
                     onClick={() => {
                         setPage(4);
                     }}/>
                <div className={page === 5 ? s.carousel_button_active : s.carousel_button}
                     onClick={() => {
                         setPage(5);
                     }}/>
            </div>
        </section>
    );
}

// {categories.map((value, i) =>
//     <li onClick={() => props.onCategoryClick(i)} className={i === props.value ? 'active' : ''} key={i}>
//         {value}
//     </li>)}
export default About;
