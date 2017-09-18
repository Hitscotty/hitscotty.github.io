import Jesus from './images/headshots/jesus.png'
import Evellard from './images/headshots/Evellard.jpg'
import Francisco from './images/headshots/Francisco.png'
import Pedro from './images/headshots/Pedro.jpg'

import MainStreetIcon from './images/blog/MainStreet.png'
import CunyFirstIcon from './images/blog/CunyFirst.png'
import WordLadderIcon from './images/blog/Wordladder.jpg'

export const config = {
    profile: {
        name: "Jonathan Portorreal",
        title: "Software Engineer",
        username: "Hitscotty",
        email: "Jportorreal77@gmail.com",
        phone: "646 696 9068",
        website: "hitscotty.com",
        place: "172 River Dr, Garfield, NJ",
        summary: `Hey, I'm Jonathan Portorreal, but everyone calls me Scotty! I'm a Software
        Engineer developing all kinds of neat stuff for 4 years now. I specialize in
        solving problems both on the front-end and the back-end. Experienced with
        mobile, web, and video game development. Strong background in functional
        programming and Haskell Evangelist.`,
        links: {
            facebook: "https://www.facebook.com/Hitscotty",
            twitter: "https://twitter.com/hitscotty",
            linkedin: "https://www.linkedin.com/in/hitscotty/",
            instagram: "https://www.instagram.com/hitscotty/",
            wordpress: "https://hitscotty.wordpress.com/"

        }
    },
    featured_projects: [
        {
            title: "MainStreet",
            date: "March - Present",
            img: MainStreetIcon,
            summary: {
                skills: [
                    "SQL", "C#", "JS"
                ],
                description: `Developed Web and Mobile App; created stored procedures and front end interfaces for them.
                Used D3JS and angular to implement difficult ui needs.
                `
            },
            more: "https://github.com/Hitscotty/MainStreetMb"
        }, {
            title: "Cuny First Api",
            date: "Dec - March",
            img: CunyFirstIcon,
            summary: {
                skills: [
                    "Node", "Express", "X-Ray"
                ],
                description: `Developed a REST api for CUNYFIRST in order to create a better version of their website. Created 
                CunySecond using this API. Used Web Scraping with JS to pull data, MongoDB to store the data temporarily, and Express 
                to serve the files as REST
                `
            },
            more: "https://github.com/Hitscotty/cuny-first-api"

        }, {
            title: "Word Ladder",
            date: "Jan - Dec",
            img: WordLadderIcon,
            summary: {
                skills: [
                    "Android", "Java", "Data Structures"
                ],
                description: `Web design, mobile design, and api developer. Developed UX experiences and
          created scalable solutions for server side data that integrated smoothly with
          client side needs.`
            },
            more: "https://github.com/Hitscotty/Word-Ladder"
        }
    ],
    skills: [
        {
            type: "Professional",
            sets: [
                {
                    skill: "C#",
                    fluency: "90%"
                }, {
                    skill: "Javascript/Nodejs",
                    fluency: "95%"
                }, {
                    skill: "Java",
                    fluency: "90%"
                }, {
                    skill: "Python",
                    fluency: "50%"
                }, {
                    skill: "SQL",
                    fluency: "74%"
                }, {
                    skill: "Agile",
                    fluency: "100%"
                }
            ]
        }, {
            type: "Personal",
            sets: [
                {
                    skill: "Haskell",
                    fluency: "60%"
                }, {
                    skill: "Category Theory",
                    fluency: "40%"
                }, {
                    skill: "Functional Programming",
                    fluency: "60%"
                }, {
                    skill: "API Development",
                    fluency: "95%"
                }, {
                    skill: "Web Scraping",
                    fluency: "89%"
                }
            ]
        }, {
            type: "Frameworks",
            sets: [
                {
                    skill: "Reactjs",
                    fluency: "82%"
                }, {
                    skill: "Ionic",
                    fluency: "88%"
                }, {
                    skill: "Angular",
                    fluency: "70%"
                }, {
                    skill: "Xamarin",
                    fluency: "67%"
                }, {
                    skill: ".NET",
                    fluency: "93%"
                }
            ]
        }
    ],
    testimonials: {
        featured: {
            author: "God",
            review: "He's the best thing I've ever created."
        },
        reviews: [
            {
                author: "Jesus",
                review: `I work with Jonathan on several web development projects and I find him to be
                extremely creative and a technical Front End Developer. Jonathan's expertise involves
                building complex features that intgrate smoothly with different backends. He's always had
                a large focus on scale and efficiency and I've always enjoyed working with him`,
                src: Jesus
            }, {
                author: "Francisco",
                review: `Jonathan has numerous treats that make him a unique candidates for many different positions. 
                He is very task oriented and knows how to deal with a lot of tasks while keeping deadlines in mind. 
                He is also always willing to help others without it interfering with his quality of work. His ability 
                to learn new technology and effectively apply it to various tasks has always been impressive to me.`,
                src: Francisco
            }, {
                author: "Pedro",
                review: `I am a Software Engineer at Capital One. Jonathan’s ability to problem 
                solve and willingness to dive in to any challenge were evident to me in projects 
                and assignments we had worked on together. He was flexible, easy to work 
                with and a great team player on the projects we were assigned together. He is a passionate individual 
                who is very willing and motivated to learn and grow as a developer and individual.
                Overall Jonathan would be an excellent addition to a software engineering role.
                `,
                src: Pedro
            }, {
                author: "Evellard",
                review: ` I am proud to call him my close friend, I admire his passion for math and his 
                skills to solve difficult puzzles.`,
                src: Evellard
            }
        ]
    }
}