import React from 'react';

const projects = [
    {
        title: 'Bulls 🐂 - Cows 🐄',
        description: 'Bulls and Cows is a logic game where the player competes against the computer. One variation of the game involves the computer thinking of a four-digit number, and the player tries to guess it.',
        github: 'https://github.com/Victoria6789/Resume/blob/main/bulls_cows.html',
        image: 'link-to-image.gif',
    },
    {
        title: 'Notion',
        description: 'Notion is a web application that allows users to create, delete, and edit their notes. Users can easily manage their notes with an intuitive interface.',
        github: 'https://github.com/Victoria6789/project2.git',
        image: 'link-to-image.gif',
    },
    {
        title: 'Lamoda',
        description: 'Lamoda is a platform that features a list of clothing items. Users can filter products by name, color, and price. Additionally, items can be sorted by popularity and price, allowing shoppers to easily and quickly find exactly what they are looking for.',
        github: 'https://github.com/Victoria6789/project3.git',
        image: 'link-to-image.gif',
    },
    {
        title: 'APP',
        description: 'An APP is a software application designed to perform specific tasks on devices such as smartphones, tablets, and computers. Apps can be mobile, web, or desktop and offer users a variety of functions, from games to task management. They provide convenient access to services and information, improving everyday tasks and enhancing productivity.',
        github: 'https://github.com/Victoria6789/project.git',
        image: 'link-to-image.gif',
    },
];

const ProjectList = () => {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <h3>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            {project.title}
                        </a>
                    </h3>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.title} />
                </div>
            ))}
        </div>
    );
};


export default ProjectList;