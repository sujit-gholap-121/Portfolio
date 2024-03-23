import React from 'react'
import Data from './Data'
import Social from './Social'
import ScrollDown from './ScrollDown'
import './home.css'

const Home = () => {
    return (
        <section className="section" id="home">
            <div className="home__container container">
                <div className="home__content ">
                    <Social />

                    <div className="home__img"></div>
                    <Data />
                </div>
                <div className='home__scroll'>
                <ScrollDown/>
                </div>


            </div>
        </section>
    )
}

export default Home