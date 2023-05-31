import React, { useState } from 'react'
import "../../styles/about.scss";
import { AboutImg, Person1, Person2, Person3, Person4, Slider1, Slider2, Slider3 } from "../../img";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Aboutus = ({ t }) => {
  const ImgesTeam = [
    {
      src: Person1,
      alt: "Img",
      name: "Ali mohmaed",
      title: "front end developer"
    },
    {
      src: Person2,
      alt: "Img",
      name: "Ali mohmaed",
      title: "front end developer"
    },
    {
      src: Person3,
      alt: "Img",
      name: "Ali mohmaed",
      title: "front end developer"
    },
    {
      src: Person4,
      alt: "Img",
      name: "Ali mohmaed",
      title: "front end developer"
    },
    {
      src: Person1,
      alt: "Img",
      name: "Ali mohmaed",
      title: "front end developer"
    },
    {
      src: Person2,
      alt: "Img",
      name: "Ali mohmaed",
      title: "front end developer"
    },
    {
      src: Person4,
      alt: "Img",
      name: "Ali mohmaed",
      title: "front end developer"
    },
  ];

  const ImgSlider = [
    { src: Slider1 },
    { src: Slider2 },
    { src: Slider3 }
  ];

  const [slide, setSlide] = useState(0)


  return (
    <div className='about-container' id='About Us'>

      <div className="line-about">
        <div className="line"></div>
      </div>

      <div className='about-content-container'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="about-content">
          <h3 className="about-title-one">{t("title-about-1")}</h3>
          <p >{t("about-desription")}</p>
        </motion.div>

        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}

          className="about-img">
          <img src={AboutImg} alt="img" />
        </motion.div>
      </div>

      <div className="about-team">
        <h3>{t("title-about-2")}</h3>

        <div className="team-img" >
          {ImgesTeam.map(img => (
            <div className="imges" >
              <img src={img.src} alt={img.alt} />
              <p className="name">{img.name}</p>
              <p className='title'>{img.title}</p>
            </div>
          ))}

        </div>

        <Link to="/team" className='more' >{t("carousel")}</Link>
      </div>

      <div className="about-slider">
        <div className="slider-left-line"><div className="left-line"></div></div>
        <div className="slider-carousel">
          <div className="slides">
            {ImgSlider.map((img, index) => (
              <motion.img
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: .5 }}
                src={img.src} alt="img" key={index} className={slide === index ? "slide" : "slide slide-hidden"} />
            ))}
          </div>
          <span className='points'>
            {ImgSlider.map((_, index) => {
              return <button onClick={() => setSlide(index)} className={slide === index ? "point" : "point point-active"} key={index}></button>
            })}
          </span>
        </div>
        <div className="slider-right-line"><div className="right-line"></div></div>
      </div>
      <div className="about-goal">
        <motion.h3
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: .5 }}
        >{t("goal-title")}</motion.h3>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: .8 }}
        >{t("goal-description")}</motion.p>
      </div>
    </div>
  )
}

export default Aboutus