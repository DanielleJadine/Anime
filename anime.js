document.addEventListener('DOMContentLoaded', function() {
    // Sample anime data (replace with your actual data)
    const animeData = [
        {
            title: "Naruto",
            description: "Follow the journey of Naruto Uzumaki, a young ninja seeking recognition.",
            image: ""
        },
        {
            title: "Attack on Titan",
            description: "Humanity fights for survival against giant humanoid creatures known as Titans.",
            image: "attack_on_titan.jpg"
        },
        // Add more anime data as needed
    ];

    const animeContainer = document.getElementById('anime-container');

    // Function to generate anime cards
    function generateAnimeCards() {
        animeContainer.innerHTML = ''; // Clear previous content

        animeData.forEach(anime => {
            const card = document.createElement('div');
            card.classList.add('anime-card');

            const image = document.createElement('img');
            image.src = anime.image;
            image.alt = anime.title;
            card.appendChild(image);

            const title = document.createElement('h3');
            title.textContent = anime.title;
            card.appendChild(title);

            const description = document.createElement('p');
            description.textContent = anime.description;
            card.appendChild(description);

            animeContainer.appendChild(card);
        });
    }

    // Generate anime cards on page load
    generateAnimeCards();
});
