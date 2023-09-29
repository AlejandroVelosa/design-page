import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import React from 'react'
import("./style/Body.css")

const Body = () => {
    return (
        <article className="container">
            <section className="container-text">
                <h2 className="container-text-title">Modern interior</h2>
                <p className="container-text-text"> A full-Service  residential & commercial interior design and staging companu offering professional organizing & eco-services</p>
                <button className="container-text-button"><span>Read more </span><i class='bx bx-right-arrow-alt'></i> </button>
            </section>


            <section className="container-photos">
                <img src={photo1} alt="" />
                <div className="container-card" >
                    <div className="container-card-title">
                        <img className="container-card-img" src={photo2} alt="" />
                        <div className="container-card-name" >
                            <p>Aliza Webber</p>
                            <p className="container-card-name-text2">interior designer</p>
                        </div>
                    </div>
                    <h3 className="container-card-date">Designed in 2020 By aliza Webber</h3>
                </div>
            </section>
        </article>
    )
}

export default Body