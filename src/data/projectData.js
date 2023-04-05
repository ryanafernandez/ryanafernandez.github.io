import chewbyThumbnail from '../assets/images/chewby-thumbnail.png';
import dbfThumbnail from '../assets/images/dbf-thumbnail.png';
import hiddenGemsThumbnail from '../assets/images/hidden-gems-thumbnail.png';


export const projectData = [
    {
        name: "Chewby",
        description: "Chewby is a calorie logging application that helps you keep a track of the amount of calories you consume each day. The application was built using a basic MERN stack and integrates an Apollo Server, GraphQL, and Semantic-UI.",
        tech: "MongoDB, Express, React, Node, Apollo Server, GraphQL, JWT, Semantic-UI, JSX, JavaScript, CSS",
        deployed: "https://chewby.herokuapp.com/",
        repository: "https://github.com/ryanafernandez/Chewby",
        thumbnail: chewbyThumbnail
    },
    {
        name: "DATABASE FighterZ",
        description: "A lightweight turn-based browser game that lets you gain and customize your character's stat points as you battle against other user-created characters on the database. Heavily uses jQuery for the user menus and controls, and CSS keyframes for sprite animations.",
        tech: "jQuery, Express, Express Handlebars, Sequelize, MySQL2, JavaScript, HTML, CSS",
        deployed: "https://dbfighterz.herokuapp.com/",
        repository: "https://github.com/linhklatt/dbfighterz",
        thumbnail: dbfThumbnail
    },
    {
        name: "Hidden Gems - San Diego",
        description: "A website where users can view hidden gem locations in San Diego, CA from a curated list of locations. The application uses the Google Maps and Google Places APIs to present the user with a map of San Diego where users can view a marked location and be presented with an image of the site, the address, and the three most recent reviews submitted on Google.",
        tech: "JavaScript, Google Maps API, Google Places API, HTML, CSS",
        deployed: "https://eddygoto.github.io/Project-1-Travel-Site/",
        repository: "https://github.com/eddygoto/Project-1-Travel-Site",
        thumbnail: hiddenGemsThumbnail
    }
];