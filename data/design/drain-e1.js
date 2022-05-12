import AVIndex from '../../src/assets/AvantVibes/AVIndex.png';
import AVArchive from '../../src/assets/AvantVibes/AVArchive.png';
import AVLinks from '../../src/assets/AvantVibes/AVLinks.png';
import SupremeMain from '../../src/assets/AvantVibes/SupremeMain2.png';
import SupremeAbout from '../../src/assets/AvantVibes/SupremeAbout2.png';

export const data = {
    "tile": {
        "title": "Miss u Chu :)",
        "subtitle": "Minimalist podcast website",
        "img": AVArchive
    },
    "page": {
        "header": {
            "title": "Drain E1",
            "subtitle": "Avant Vibes, powered by Monster Energy® is a weekly delve into the forefront of vibe culture, ranging from the most fuego fits to the most diesel tracks out right now. Follow your hosts as they center their chakras, live, laugh, and love in the center of it all. Peace forever, R.I.P Jerry. - Scraped from “About Page”",
            "startDate": "2019",
            "endDate": "2019",
            "sidebarTitle": "digital thoughts",
            "sidebarSubtitle": "an experiment in sound"
        },
        "gallery": [AVIndex, AVArchive, AVLinks],
        "panels": [
            [
                {
                    "meta": {
                        "type": "TextBox",
                        "props": {
                            "pos": "right"
                        }
                    },
                    "title": "Process",
                    "subtitle": "digital Inspiration",
                    "text": [
                        "The Avant Vibes webpage took two design cues from seemingly disparate design philosophies. The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme.\nHere the web designer has opted for a simple, high contrast colour scheme of black, white and red as well as saturated monochrome background photo. This makes the site highly readable, and when paired with the simple layout of the site it draws the viewer’s attention to the text content or photo content of the products. One could also draw the connection to this style of design to the physical retail location’s layout schema, opting for a simple uncrowded space where the products themselves are emphasized by the surronding negative spaces.",
                        "In contrast, the second major design cue was from archaic web design practices, notably the use of tables and loud graphics which became popular in the late 90s and early to mid 00s.\nOne could posit that the popularity of this style was due to the explosion of the web in the early 2000s. With the rise of web development as a profession, as well as software like adobe flash, a growing toolkit was available to designers and amateurs alike. This led to a proliferation of website templates and royalty free assets leading to heavy use of standarised tabular layouts featuring and dynamic elements such as gifs and animations."
                    ]
                }, {
                    "meta": {
                        "type": "HalfPageImage",
                        "props": {
                            "src": [SupremeMain, SupremeAbout],
                            "width": "250px",
                            "height": "500px",
                            "top": "50%",
                            "left": "50%"
                        }
                    }
                }
            ],[ 
                {
                    "meta": {
                        "type": "CentralImage",
                        "props": {
                            "src": AVIndex
                        }
                    } 
                }
            ], [
                {
                    "meta": {
                        "type": "TextBox",
                        "props": {
                            "stack": "vert"
                        }
                    },
                    "text": [
                        "The Avant Vibes webpage took two design cues from seemingly disparate design philosophies. The general layout and arguably main theme of the site was minimalism, as utilised by retail sites such as Supreme. Here the web designer has opted for a simple, high contrast colour scheme of black, white and red as well as saturated monochrome background photo. This makes the site highly readable, and when paired with the simple layout of the site it draws the viewer’s attention to the text content or photo content of the products. One could also draw the connection to this style of design to the physical retail location’s layout schema, opting for a simple uncrowded space where the products themselves are emphasized by the surronding negative spaces.",
                        "In contrast, the second major design cue was from archaic web design practices, notably the use of tables and loud graphics which became popular in the late 90s and early to mid 00s.\nOne could posit that the popularity of this style was due to the explosion of the web in the early 2000s. With the rise of web development as a profession, as well as software like adobe flash, a growing toolkit was available to designers and amateurs alike. This led to a proliferation of website templates and royalty free assets leading to heavy use of standarised tabular layouts featuring and dynamic elements such as gifs and animations."
                    ]
                }, {
                    "meta": {
                        "type": "HalfPageImage",
                        "props": {
                            "src": SupremeMain,
                            "width": "250px",
                            "height": "500px",
                            "centre": false,
                            "pos": "right",
                            "right": "0",
                            "bottom": "2rem",
                        }
                    }
                }
            ]    
        ]

    }
}