const projects = [
    {
        id: 1,
        projectName: "Weather App Team Project",
        thumbnailSource: require('@/assets/thumbnails/Final-Project-Weather-App.png'),
        description: 'Final project for Team 17 at Momentum Learning. My team and I wanted to work on something fun and that would help younger users get into Meteorology more.',
        youtubeVideoId: "V4lDmFBwCgU",
        githubRepo: "Final-Project-Weather-App",
        projectOverview: `
        Our final project for Momentum was the creation of an innovative animal collection weather app, named 'Is It Raining?' The project was a collaborative effort among myself and three fellow students, aiming to blend weather updates with creature collecting in a manner reminiscent of 'Pokemon Go.'
        Designed with a target audience of users aged 10 and above, the app seamlessly integrates real-time weather data sourced from the OpenWeatherMap API. A distinctive feature of the app is its ability to generate a unique animal corresponding to the day's weather conditions. Each creature is programmed to appear in alignment with specific weather conditions, adding an element of surprise and engagement for users.
        To build their collection, users are required to catch these creatures, a process initiated by creating an account. The app allows anyone to view weather updates, but the delightful task of creature-catching and collection-building is reserved for registered users.
        Catching the same animal multiple times unlocks the transformation into a 'Mega Beast,' a coveted achievement that accumulates points. To maintain balance and prevent exploitation, users are limited to catching the same animal once every 12 hours.
        What sets this project apart is the impressive array of 47 unique creature designs, all meticulously illustrated by yours truly.
        `,
        challengesSolutions: "Share any challenges or problems you encountered during the development process and how you overcame them.",
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: require('@/assets/codesnippets/weatherapp_code_1.png'),
        codeExplain: `
        Below is code for my serializer named AnimalSerializer. It is designed to handle the serialization of instances of the Animal model. 
        The get_weather method maps numeric weather codes from the OpenWeatherAPI to the corresponding animals.

        The get_can_capture method checks if the current user is authenticated and has the permission to capture the animal based on a time constraint. If the user has not captured the animal before or if enough time (12 hours) has passed since the last capture, the method returns True, indicating that the user can capture the animal. 

        The get_points_left_until_max method calculates the points left until the animal reaches its maximum level, considering a maximum of 10 points. The points are calculated based on the user's previous captures of the animal.
        `,
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
    {
        id: 2,
        projectName: "Dinosaur Fighting Game",
        thumbnailSource: require('@/assets/thumbnails/Dinosaur-Fighting-Game.png'),
        description: "Trying to recreate the classic 'Primal Rage' arcade game in Pygame. So far I have Diablo and Sauron.",
        youtubeVideoId: "tLRHc_CkOuQ",
        githubRepo: "Dinosaur-Fighting-Game",
        projectOverview: "Provide a brief overview of the project, including its purpose, goals, and key features.",
        challengesSolutions: "Share any challenges or problems you encountered during the development process and how you overcame them.",
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: "Code snippets",
        codeExplain: "Explain code snippet",
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
    {
        id: 3,
        projectName: "Social Card Team Project",
        thumbnailSource: require('@/assets/thumbnails/Social-Card-Team-Project.png'),
        description: "Team project where backend and frontend collaborated to make a card site for users to create greeting cards, share them on a feed and follow other users.",
        youtubeVideoId: "V4lDmFBwCgU",
        githubRepo: "Social-Card-Team-Project",
        projectOverview: "Provide a brief overview of the project, including its purpose, goals, and key features.",
        challengesSolutions: "Share any challenges or problems you encountered during the development process and how you overcame them.",
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: "Code snippets",
        codeExplain: "Explain code snippet",
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
    {
        id: 4,
        projectName: "Library API",
        thumbnailSource: require('@/assets/thumbnails/Library-API.png'),
        description: "API application that lets users keep track of books, including important information like title, author, publication date, a genre, and a field that marks it as 'featured'.",
        youtubeVideoId: "ukgu9-KHiGg",
        githubRepo: "Library-API",
        projectOverview: "Provide a brief overview of the project, including its purpose, goals, and key features.",
        challengesSolutions: "Share any challenges or problems you encountered during the development process and how you overcame them.",
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: "Code snippets",
        codeExplain: "Explain code snippet",
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
    {
        id: 5,
        projectName: "Poke-API Project",
        thumbnailSource: require('@/assets/thumbnails/Poke-API-Project.png'),
        description: "Pulls from the PokeAPI, Displays: Name, Id, Image, Attacks and Type, Stores the information in a local database.",
        youtubeVideoId: "i2Y_WlzOLAI",
        githubRepo: "Poke-API-Project",
        projectOverview: "Provide a brief overview of the project, including its purpose, goals, and key features.",
        challengesSolutions: "Share any challenges or problems you encountered during the development process and how you overcame them.",
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: "Code snippets",
        codeExplain: "Explain code snippet",
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
    {
        id: 6,
        projectName: "Task Manager Application",
        thumbnailSource: require('@/assets/thumbnails/Task-Manager-Application.png'),
        description: "App that allows the user to keep track of incompleted and completed tasks.",
        youtubeVideoId: "aQKLEIFKCsg",
        githubRepo: "Task-Manager-Application",
        projectOverview: "Provide a brief overview of the project, including its purpose, goals, and key features.",
        challengesSolutions: "Share any challenges or problems you encountered during the development process and how you overcame them.",
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: "Code snippets",
        codeExplain: "Explain code snippet",
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
];

export default projects;