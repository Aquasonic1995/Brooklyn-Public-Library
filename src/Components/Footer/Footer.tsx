import React from 'react';
import s from './Footer.module.scss'
import twitter from '../../img/Twitter.svg'
import instagram from '../../img/Instagram.svg'
import facebook from '../../img/Facebook.svg'

function Footer() {
    return (
        <footer>
            <div className={s.footer_wrapper}>
                <div className={s.social}>
                    <p><a href="https://goo.gl/maps/2Nh8N6w4FnMWQhDJ9">286 Cadman Plaza, New York,</a><br/> NY 11238, United States</p>
                    <div className={s.icons}>
                        <a href="https://twitter.com/">  <img src={twitter} alt="twitter"/></a>
                        <a href="https://instagram.com/"> <img src={instagram} alt="instagram"/></a>
                        <a href="https://facebook.com/"><img src={facebook} alt="facebook"/></a>
                    </div>
                </div>
                <div className={s.hours}>
                    <p>Mon - Fri <br/>08:00 am - 07:00 pm</p>
                    <p>Sat - Sun <br/>10:00 am - 06:00 pm</p>
                </div>
            </div>
            <div className={s.rs_school}>
                <div>2023</div>
                <div><a href="https://rs.school/js-stage0/">The Rolling Scopes School</a></div>
                <div><a href="https://github.com/Aquasonic1995">Ivan Litomin</a></div>
            </div>

        </footer>
    );
}

export default Footer;