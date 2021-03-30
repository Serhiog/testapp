function Form() {
    return (
        <section className="form">
            <div className="form__wrapper">
                <h3 className="form__title">GIVE US A GOOD NEWS</h3>
                <>
                    <input className="form__name" type="text" placeholder="Name" />
                    <input className="form__email" type="email" placeholder="Email" />
                    <input className="form__subject" type="text" placeholder="Subject" />
                    <textarea className="form__message" type="text" placeholder="Your Massage" defaultValue={""}></textarea>
                    <button className="form__btn">SUBMIT</button>
                </>
            </div>
        </section>

    )
}

export default Form