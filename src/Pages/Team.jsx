import React from 'react';
import { Person1, Person2, Person3, Person4, Person5, Person6, Person7, Person8, Person9 } from "../img";
import "../styles/team.scss";
import { motion } from "framer-motion";

const team = ({ t }) => {
    const teamImg = [
        {
            img: Person1,
            title: "Team Consultant",
            name: "Simon Árpád"
        },
        {
            img: Person2,
            title: "Financial Analyst",
            name: "Mezei Ágnes"
        },
        {
            img: Person3,
            title: " Web Developer IV",
            name: "Farkas Ágnes"
        },
        {
            img: Person4,
            title: "Team Consultant",
            name: "Simon Árpád"
        },
        {
            img: Person5,
            title: "Financial Analyst",
            name: "Mezei Ágnes"
        },
        {
            img: Person6,
            title: "Web Developer IV",
            name: "Farkas Ágnes"
        },
        {
            img: Person7,
            title: "Team Consultant",
            name: "Simon Árpád"
        },
        {
            img: Person8,
            title: "Web Developer IV",
            name: "Farkas Ágnes"
        },
        {
            img: Person9,
            title: "Financial Analyst",
            name: "Mezei Ágnes"
        },
    ]
    return (
        <div className='team-container'>
            <h3 className="team-title">{t("title-about-2")}</h3>
            <div className="team-boxes">
                {teamImg.map((person) => (
                    <div className="team-box">
                        <motion.img
                            whileInView={{ scale: [0, 1] }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            src={person.img} alt='img' />
                        <motion.p
                            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className='name'>{person.name}</motion.p>
                        <motion.p
                            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.9 }}
                            className='title'>{person.title}</motion.p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default team