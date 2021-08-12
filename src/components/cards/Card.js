import React from 'react'
import {data} from '../../helper/data'


import "./card.css"

function Card() {

    return (
      
        <>
            <div className="container">
                <div className = "row">
                    <div className="col-12 d-flex main-container   ">
                        <div className="col-md-12 col-lg-3 bg-dark main-card">
                            <p className="card-title">{data[0].title}</p>
                            <img className="col-12 images" src = {data[0].image} alt="newYork"></img>
                            <p className= "card-text">{data[0].desc}</p>
                        </div>
                    
                        <div className="col-md-12 col-lg-3 bg-dark main-card">
                            <div className="col-12 card-title">
                                {data[1].title}
                            </div>
                            <div className ="photos">
                               <img className="col-12 images" src = {data[1].image} alt="newYork"></img>
                                <p className= "card-text">{data[1].desc}</p>
                            </div>
                    
                        </div>
                    <   div className="col-md-12 col-lg-3 bg-dark main-card">
                            <div className="col-12 card-title">
                                {data[2].title}
                            </div>
                            <div className ="photos">
                                <img className="col-12 images" src = {data[2].image} alt="newYork"></img>
                                <p className= "card-text">{data[2].desc}</p>
                        </div>
                    
                    </div>
                    </div>
                </div>
                <div className = "row">
                    <div className="col-12 d-flex main-container   ">
                        <div className="col-md-12 col-lg-3 bg-dark main-card">
                            <p className="card-title">{data[3].title}</p>
                            <img className="col-12 images" src = {data[3].image} alt="newYork"></img>
                            <p className= "card-text">{data[3].desc}</p>
                        </div>
                    
                        <div className="col-md-12 col-lg-3 bg-dark main-card">
                            <div className="col-12 card-title">
                                {data[4].title}
                            </div>
                            <div className ="photos">
                               <img className="col-12 images" src = {data[4].image} alt="newYork"></img>
                                <p className= "card-text">{data[4].desc}</p>
                            </div>
                    
                        </div>
                    <   div className="col-md-12 col-lg-3 bg-dark main-card">
                            <div className="col-12 card-title">
                                {data[5].title}
                            </div>
                            <div className ="photos">
                                <img className="col-12 images" src = {data[5].image} alt="newYork"></img>
                                <p className= "card-text">{data[5].desc}</p>
                        </div>
                    
                    </div>
                    </div>
                </div>
                <div className = "row">
                    <div className="col-12 d-flex main-container  ">
                        <div className="col-md-12 col-lg-3 bg-dark main-card">
                            <p className="card-title">{data[6].title}</p>
                            <img className="col-12 images" src = {data[6].image} alt="newYork"></img>
                            <p className= "card-text">{data[6].desc}</p>
                        </div>
                    
                        <div className="col-md-12 col-lg-3 bg-dark main-card">
                            <div className="col-12 card-title">
                                {data[7].title}
                            </div>
                            <div className ="photos">
                               <img className="col-12 images" src = {data[7].image} alt="newYork"></img>
                                <p className= "card-text">{data[7].desc}</p>
                            </div>
                    
                        </div>
                    <   div className="col-md-12 col-lg-3 bg-dark main-card">
                            <div className="col-12 card-title">
                                {data[8].title}
                            </div>
                            <div className ="photos">
                                <img className="col-12 images" src = {data[8].image} alt="newYork"></img>
                                <p className= "card-text">{data[8].desc}</p>
                        </div>
                    
                    </div>
                    </div>
                </div>
                <div className = "row">
                    <div className="col-12 d-flex main-container  ">
                        <div className="col-md-12 col-lg-3 bg-dark main-card">
                            <p className="card-title">{data[9].title}</p>
                            <img className="col-12 images" src = {data[9].image} alt="newYork"></img>
                            <p className= "card-text">{data[9].desc}</p>
                        </div>
                    
                        <div className="col-md-12 col-lg-3 bg-dark main-card">
                            <div className="col-12 card-title">
                                {data[10].title}
                            </div>
                            <div className ="photos">
                               <img className="col-12 images" src = {data[10].image} alt="newYork"></img>
                                <p className= "card-text">{data[10].desc}</p>
                            </div>
                    
                        </div>
                    <   div className="col-md-12 col-lg-3 bg-dark main-card">
                            <div className="col-12 card-title">
                                {data[11].title}
                            </div>
                            <div className ="photos">
                                <img className="col-12 images" src = {data[11].image} alt="newYork"></img>
                                <p className= "card-text">{data[11].desc}</p>
                        </div>
                    
                    </div>
                    </div>
                </div>            
            </div>

        </>
    )
}


export default Card
