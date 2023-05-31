import React , {useState} from 'react';
import "../../styles/contact.scss";
import { SelectImg1, SelectImg2, SelectImg3 } from "../../img";
import {motion} from "framer-motion";

const FormStart = ({ t , page , setPage }) => {
    const [marck1 , setMarck1] = useState(false);
    const [marck2 , setMarck2] = useState(false)
    return (
        <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: .5 }}
        className='form-start'>
            <div className="form-boxes">
                <div className="box" onClick={function(){setMarck1(true);setMarck2(false)}} >
                    <div className="imges">
                        <img src={SelectImg1} alt="img" />
                        <img src={SelectImg2} alt="img" />
                        <img src={SelectImg3} alt="img" />
                    </div>
                    <div className="type">{t("contact-form-select1")}</div>
                    {marck1 && <p className='check'> &#10004;</p>}
                </div>
                <div className="box"  onClick={function(){setMarck1(false);setMarck2(true)}}>
                    <div className="imges">
                        <img src={SelectImg1} alt="img" />
                        <img src={SelectImg2} alt="img" />
                        <img src={SelectImg3} alt="img" />
                    </div>
                    <div className="type">{t("contact-form-select2")}</div>
                    {marck2 && <p className='check'> &#10004;</p>}
                </div>
                <button onClick={() => {setPage((currpage) => currpage +1)}} className='btn-form-start'>{t("contact-form-btn")}</button>
            </div>

        </motion.div>
    )
}

export default FormStart