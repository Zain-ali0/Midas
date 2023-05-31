import React, { useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const FormInfo = ({ t, setMassage }) => {

    const form = useRef();
    const Sumbit = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_75xk2kc', 'template_day7ype', form.current, 'f0hlVZ-fPkcFFvHEx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setMassage(true)
    }




    return (
        <motion.form
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: .5 }}
            ref={form}
            onSubmit={Sumbit}
            className='form-info'>
            <div className="inputs">
                <input type='text' placeholder='Your Name..' name='name' />
                <input type='text' placeholder='Your Email..' name='email' />
            </div>
            <div className="form-checks">
                <p>{t("contact-form-q")}</p>
                <div className="checks">
                    <label>
                        {t("conatct-form-select1")}
                        <input type='radio' />
                    </label>
                    <label>
                        {t("conatct-form-select2")}
                        <input type='radio' />
                    </label>
                    <label>
                        {t("conatct-form-select3")}
                        <input type='radio' />
                    </label>
                    <label>
                        {t("conatct-form-select4")}
                        <input type='radio' />
                    </label>
                </div>
            </div>
            <button type='submit' className='btn-form-info'>{t("form-btn2")}</button>
        </motion.form>
    )
}

export default FormInfo;