import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";




const Resume = () => {

    //about
    const about = {
        title: 'about',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis necessitatibus eos corrupti tenetur, blanditiis quae dolorem impedit consequuntur eligendi quos suscipit! Non impedit quod repellendus quas sequi placeat perspiciatis.',
        info: [
            {
                fieldName: "Name",
                fieldValue: "Ayomide Akinrata"
            },
            {
                fieldName: "Phone",
                fieldValue: "(234) 703 493 0171"
            },
            {
                fieldName: "Experience",
                fieldValue: "3+ years"
            },
            {
                fieldName: "Nationality",
                fieldValue: "Nigerian"
            }, {
                fieldName: "Email",
                fieldValue: "akinrataa@gmail.com"
            }, {
                fieldName: "Freelance",
                fieldValue: "Available"
            },
            {
                fieldName: "Languages",
                fieldValue: "English, Yoruba"
            }
        ]
    }

    //experience

    const experience = {
        icon: "#",
        title: "My experience",
        description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore quas sed tenetur, dolorum in corrupti architecto unde praesentium quasi inventore voluptatem, quae, a natus odit nesciunt porro molestiae et",
        items: [
            {
                company: "Ecommerce Startup",
                position: "Freelance web development",
                duration: "2024 - present"
            },
            {
                company: "Unify IVY",
                position: "code review and contribution",
                duration: "Septemner 2023 - December 2023"
            },
            {
                company: "Icy Tech",
                position: "Frontend Development",
                duration: "2022 - 2023"
            },
            {
                company: "Icy Tech",
                position: "Internship",
                duration: "2021 - 2022"
            }
        ]
    }

    //education

    const education = {
        icon: "#",
        title: "My Education",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error eius, tempora non eveniet sapiente asperiores, quidem culpa architecto sint numquam veniam necessitatibus? Est, deleniti velit quia nostrum excepturi necessitatibus.",
        items: [
            {
                institution: "Federal University Of Technology Akure",
                degree: "Computer Science(Cyber Security)",
                duration: "2016 - 2023"
            },
            {
                institution: "Cousera",
                degree: "Foundarion Of Cyber Security",
                duration: "2023"
            },
            {
                institution: "Udemy",
                degree: "AngularFire",
                duration: "2022"
            }
        ]

    }

    //skill
    const skills = {
        title: "My Skill",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non maxime eveniet nemo possimus. Aliquam architecto laboriosam sapiente nisi sed sint voluptatem ipsa nam eos nulla provident officiis, assumenda rerum.",
        skillList: [
            {
                icon: <FaHtml5 />,
                name: "html 5"
            },
            {
                icon: <FaCss3 />,
                name: "Css 3"
            },
            {
                icon: <FaJs />,
                name: "Javascript"
            },
            {
                icon: <FaReact />,
                name: "React JS"
            },
            {
                icon: <SiNextdotjs />,
                name: "Next JS"
            },
            {
                icon: <FaPython/>,
                name: "Python"
            },
            {
                icon: <SiTailwindcss />,
                name: "Tailwind Css"
            },
            {
                icon: <FaNode />,
                name: "Node JS"
            },
        ]
    }
    return (
        <>
            <FaHtml5 />
        </>
    )
}

export default Resume