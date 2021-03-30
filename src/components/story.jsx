import storyLogo from '../img/story-logo.png';

function Story() {
    return (<section className="story">
        <div className="story-wrapper">
            <div className="story-logo">
                <img className="story-img" src={storyLogo} alt="Logo Company Triangle" width="235px" height="229px" />
            </div>
            <div className="story-wrapper-text">
                <h3 className="story-title">our story</h3>
                <p className="story-text">
                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                    nibh vulputate cursus
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                    consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
      </p>
                <button className="story-btn">LEARN MORE</button>
            </div>
        </div>
    </section>)
}

export default Story