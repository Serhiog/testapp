function Works() {
    return (
        <section className="works">
            <div className="works__wrapper">
                <div className="works__top">
                    <h3 className="works__title">OUR WORKS</h3>
                    <p className="works__about">See All Project in dribbble</p>
                </div>
                <ul className="works__gallery">
                    <li className="works__item works__item--light" />
                    <li className="works__item works__item--dark" />
                    <li className="works__item works__item--norm" />
                    <li className="works__item works__item--dark" />
                    <li className="works__item works__item--light" />
                    <li className="works__item works__item--norm" />
                    <li className="works__item works__item--dark" />
                    <li className="works__item works__item--norm" />
                    <li className="works__item works__item--light" />
                    <li className="works__item works__item--dark" />
                    <li className="works__item works__item--norm" />
                    <li className="works__item works__item--dark" />
                </ul>
                <button className="works-button">LOAD MORE</button>
            </div>
        </section>

    )
}

export default Works