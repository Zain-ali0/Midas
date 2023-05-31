import React, { useState } from 'react'
import { Logo } from '../img';
import "../styles/navbar.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";



const NavBar = ({ t, i18n }) => {

    const Items = [
        {
            path: '/#Home',
            name: `${t("Home")}`
        },
        {
            path: "/#About Us",
            name: `${t("About Us")}`
        },
        {
            path: "/#Servies",
            name: `${t("Servies")}`
        },
        {
            path: "",
            name: `${t("Courses")}`
        },
        {
            path: "/contact",
            name: `${t("Contact")}`
        }
    ]


    const ChangeLag = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    const [showToggle, setShowToggle] = useState(false);
    const [activePath, setActivePath] = useState(window.location.pathname);

    const handleClick = (path) => {
        setActivePath(path);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);

        if (option === 'en') {
            i18n.changeLanguage('en');
        } else if (option === 'ar') {
            i18n.changeLanguage('ar');
        }
    };

    const options = [
        { value: 'en', label: 'English' },
        { value: 'ar', label: 'العربية' },
    ];


    return (
        <div className='navbar-container'>
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
            </div>

            <ul className="navbar-navigation">
                {Items.map((item, index) => (
                    <li key={index} ><a href={item.path}
                        className={`nav-item ${activePath === item.path ? 'active' : ''}`}
                        onClick={() => handleClick(item.path)}
                    >{item.name}</a></li>
                ))}
                <div className="custom-select">
                    <div className={`select-header ${isOpen ? 'open' : ''}`} onClick={toggleSelect}>
                        {selectedOption ? options.find(option => option.value === selectedOption).label : ""}
                        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
                    </div>
                    {isOpen && (
                        <ul className="select-options">
                            {options.map((option) => (
                                selectedOption === option.value ? null : (
                                    <li
                                        key={option.value}
                                        onClick={() => handleOptionClick(option.value)}
                                        className={`select-option`}
                                    >
                                        {option.label}
                                    </li>
                                )
                            ))}
                        </ul>
                    )}
                </div>
            </ul>

            <div className="navbar-menu-toggle">
                <BiMenuAltRight onClick={() => setShowToggle(true)} />

                {
                    showToggle &&
                    <div className='link-toggle'>
                        <GrClose onClick={() => setShowToggle(false)} />
                        {Items.map((item, index) => (
                            <li key={index} ><a href={item.path}
                                className={`nav-item ${activePath === item.path ? 'active' : ''}`}
                                onClick={function () { handleClick(item.path); setShowToggle(false) }}
                            >{item.name}</a></li>
                        ))}

                        {
                            i18n.language === 'ar'
                                ? <button value='en' onClick={ChangeLag}>English</button> : <button value='ar' onClick={ChangeLag}>العربية</button>
                        }

                    </div>
                }
            </div>

        </div>
    )
}

export default NavBar;