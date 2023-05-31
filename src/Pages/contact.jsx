import React, { useState } from 'react';
import { ContactImg, Logo } from '../img';
import "../styles/contact.scss";
import { FormInfo, FormStart, FormMessage } from "../components";

const Contact = ({ t }) => {

    const [page, setPage] = useState(0);
    const [message, setMassage] = useState(false)

    const PageDisply = () => {
        if (page === 0) {
            return <FormStart t={t} setPage={setPage} page={page} />
        } if (page === 1) {
            return <FormInfo t={t} setPage={setPage} setMassage={setMassage} />
        }
    }

    return (
        <div className='contact-container'>
            <div className="contact-form">
                <div className="form-logo">
                    <img src={Logo} alt="img" />
                    {!message && <p className="form-title">{t("contact-form-title")}</p>}
                </div>
                {message ? <FormMessage t={t} /> :
                    <div className='form'>
                        {PageDisply()}
                    </div>
                }
                {
                    message ? <></> :
                        <div className="progressbar">
                            <div className="progressbar-line" style={{ background :"#FCA311"}}></div>
                            <div className="progressbar-line" style={{ background : page === 1 ? "#FCA311" :'#FFFFFF' }}></div>
                        </div>
                }
            </div>
            <div className="contact-img">
                <img src={ContactImg} alt="img" />
                <div className="content-img">
                    <p className='details'>{t("contact-img-title")}</p>
                    <p className="team">{t("contact-img-des")}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact