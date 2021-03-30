function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__wrapper">
                    <div className="footer__logo-inner">
                        <h4 className="footer__logo-title">tajam</h4>
                        <p className="footer__logo-about">lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit.
        Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</p>
                    </div>
                    <div className="footer__adress-inner">
                        <span className="footer__adress-logo">OUR STUDIO</span>
                        <p className="footer__adress-point">Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat
        11480 - Indonesia</p>
                        <a href="tel:+62 21-2224 3333" className="footer__adress-tel">(+62) 21-2224 3333</a>
                    </div>
                    <div className="footer__touch-inner">
                        <span className="footer__touch-title">STAY IN TOUCH</span>
                        <div className="footer__touch-input-wrapper">
                            <input className="footer__touch-input" placeholder="Subscribe our newsletter" />
                            <button className="footer__touch-btn" />
                        </div>
                        <ul className="footer__touch-list">
                            <li className="footer__touch-item">
                                <a className="footer__touch-item-fb-link" />
                            </li>
                            <li className="footer__touch-item">
                                <a className="footer__touch-item-tw-link" />
                            </li>
                            <li className="footer__touch-item">
                                <a className="footer__touch-item-ball-link" />
                            </li>
                            <li className="footer__touch-item">
                                <a className="footer__touch-item-inst-link" />
                            </li>
                            <li className="footer__touch-item">
                                <a className="footer__touch-item-google-link" />
                            </li>
                            <li className="footer__touch-item">
                                <a className="footer__touch-item-youtube-link" />
                            </li>
                        </ul>
                    </div>
                    <div className="footer__terms-inner">
                        <ul className="footer__terms-list">
                            <li className="footer__terms-item">
                                <a className="footer__terms-link">HELP</a>
                            </li>
                            <li className="footer__terms-item">
                                <a className="footer__terms-link"> TERMS &amp; CONDITION</a>
                            </li>
                            <li className="footer__terms-item">
                                <a className="footer__terms-link">PRIVACY</a>
                            </li>
                        </ul>
                        <span className="footer__terms-copy">Copyright © 2015 - Tajem Creative</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer