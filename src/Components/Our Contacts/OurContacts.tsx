import React from 'react';
import s from './OurContacts.module.scss'

function OurContacts() {
    return (
        <section className={s.our_contacts} id="contacts">
            <h2>Our Contacts</h2>
            <div className={s.contacts_wrapper}>
                <div className={s.contacts}>
                    <b>For all Library inquiries:</b><br/>
                    <p>Please call <a href="tel:(617) 730-2370">(617) 730-2370</a></p><br/>
                    <p>For TTY service, please call<a href="tel:(617) 730-2370">(617) 730-2370</a><br/></p>
                    <p>Putterham Library: <a href="tel:(617) 730-2385">(617) 730-2385</a> </p><br/>
                    <b>Senior Staff</b><br/>
                    <p>Library Director: <a href="mailto:AmandaHirst@gmail.com"><b>Amanda Hirst</b></a> </p>
                </div>
                <div className={s.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.1452028212527!2d-73.99140975323182!3d40.69556927046055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a49b649b8c3%3A0x6342a2291cea2e!2zMjg2IENhZG1hbiBQbGF6YSBXLCBCcm9va2x5biwgTlkgMTEyMDEsINCh0KjQkA!5e0!3m2!1sru!2sby!4v1690694508728!5m2!1sru!2sby"
                        width="696" height="414" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
}

export default OurContacts;