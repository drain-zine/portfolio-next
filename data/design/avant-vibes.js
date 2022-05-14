import AVIndex from '../../src/assets/AvantVibes/AVIndex.png';
import AVArchive from '../../src/assets/AvantVibes/AVArchive.png';
import AVLinks from '../../src/assets/AvantVibes/AVLinks.png';
import SupremeMain from '../../src/assets/AvantVibes/SupremeMain2.png';
import SupremeAbout from '../../src/assets/AvantVibes/SupremeAbout2.png';
import text1 from '../markdown/avant-vibes/av1.md';
import text2 from '../markdown/avant-vibes/av2.md';
import text3 from '../markdown/avant-vibes/av3.md';
import text4 from '../markdown/avant-vibes/av4.md';

export const data = {
    "tile": {
        "title": "Avant Vibes",
        "subtitle": "Minimalist podcast website",
        "img": AVIndex
    },
    "page": {
        "header": {
            "title": "Avant Vibes",
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
                        text1,
                        text2,
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
                        text3,
                        text4
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