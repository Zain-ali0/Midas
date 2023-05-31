import React from 'react';
import "../../styles/home.scss";
import { HomeImg1, HomeImg2 } from "../../img"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Home = ({ t }) => {

    return (
        <div className='home-container' id="Home">
            <div className="home-page-one">

                <div className="home-page-one-img">
                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        src={HomeImg1} alt='img' />
                </div>

                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="home-page-one-content">
                    <h3>{t("title-home1")} <span>{t('title-home1-span')}</span></h3>
                    <p>{t('description-home1')}</p>
                    <div className="home-page-one-btn">
                        <Link to='/contact' className="home-page1-btn-2" >{t('button2-home')}</Link>
                        <a href='#Servies' className="home-page1-btn-1" >{t('button1-home')}</a>
                    </div>
                </motion.div>

            </div>

            <div
                className="home-page-two">

                <div className="home-page-two-img">
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="bg"></motion.div>
                    <img src={HomeImg2} alt='img' />
                </div>

                <div className="home-page-two-content">
                    <motion.div
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="bg-content"></motion.div>
                    <div>
                        <h3>{t("title-home2")}</h3>
                        <p>{t('description-home2')}</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Home;


