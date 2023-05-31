import React from 'react';
import "../../styles/contact.scss";

function FormMessage({ t }) {
    return (
        <div className='form-message'>
            <h2>
                <span>
                    {t("form-span")}
                </span>
                <br/>
                {t("form-message")}
            </h2>
        </div>
    )
}

export default FormMessage