import React from 'react'
import {AiFillInstagram} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import {Logo} from "../img";
import "../styles/footer.scss";

const Footer = ({t}) => {
    return (
        <div className='footer-container'>
            <div className="footer-one">
                <img src={Logo} alt="img"/>
                <p className='title-one'>{t( "Footer-title")}</p>
                <div className="icons">
                    <AiFillInstagram/>
                    <SiGmail/>
                </div>
            </div>
            <div className="footer-line"></div>
            <div className="footer-two">
                <p> midascomany@gmail.com </p>
                <p>+694 772 788 0505</p>
                <p>{t("Footer-addres")} </p>
            </div>
        </div>
    )
}

export default Footer