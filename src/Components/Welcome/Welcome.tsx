import React from 'react';
import s from './Welcome.module.scss'

function Welcome() {
    return (<section className={s.welcome}>
            <div className={s.test}></div>
            <div className={s.welcome_text}>welcome<br/>to the Brooklyn<br/>library</div>

        </section>
    );
}

export default Welcome;