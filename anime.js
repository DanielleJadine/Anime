document.addEventListener('DOMContentLoaded', function() {
    // Sample anime data (replace with your actual data)
    const animeData = [
        {
            title: "Bleach",
            description: "Ichigo Kurosaki, a teenager with the ability to see ghosts, gains the powers of a Soul Reaper and dedicates his life to protecting the innocent and helping tortured souls find peace.",
            image: "images/OIP (3).jfif"
        },
        {
            title: "Baki",
            description: "Baki Hanma, a young martial artist, seeks to become stronger by taking on various opponents in brutal underground fighting tournaments.",
            image: "images/angry-baki-hanma-in-black-2bkviazno5lh0711.jpg"
        },
        {
            title: "Spy Family",
            description: "A skilled spy, an assassin, and a telepath form an unlikely family as part of a covert mission, each hiding their true identities from the others.",
            image: "images/Spy-X-Family.webp"
        },
        {
            title: "Hunter X Hunter",
            description: "Gon Freecss embarks on a journey to become a Hunter and find his father, meeting friends and facing numerous challenges along the way in a world full of dangerous creatures and hidden treasures.",
            image: "images/R123.png"
        },
        {
            title: "Stray Dogs",
            description: "Atsushi Nakajima, a young man with supernatural powers, joins a detective agency that handles cases involving other individuals with special abilities.",
            image: "images/8e6935955b373312e61204b9f56c1d13.jpg"
        },
        {
            title: "Naruto",
            description: "Follow the journey of Naruto Uzumaki, a young ninja seeking recognition.",
            image: "images/R.jfif"
        },
        {
            title: "Fairy Tail",
            description: "Lucy is a seventeen-year-old mage with the power to summon stellar spirits, but what she really wants to do is join a guild - and not just any guild. She has her eyes set on Fairy Tail, a notoriously reckless and outrageous group of magic users who are likely to be drunk or destroying buildings and towns in the process of completing a job! .",
            image: "images/fairy-tail-1-190x268.jpg"
        },
        {
            title: "One Piece",
            description: "Long ago the infamous Gol D. Roger was the strongest and most powerful pirate on the seas. As he was about to be executed he revealed that he hid all of his wealth, including the legendary treasure known as One Piece, on an island at the end of the Grand Line .",
            image: "images/one-piece-1-190x260.jpg"
        },
        {
            title: "Flame Of Recca",
            description: "Recca dreams of one day becoming an excellent ninja, but in this day and age ninjas are only talked about in history lessons. While playing his ninja games, he meets a mysterious woman that reveals to Recca his past, his bond with the powerful Hokage clan.",
            image: "images/flame-of-recca-1-190x285.jpg"
        },
        {
            title: "Yu-Yu Hakusho",
            description: "Yusuke Urameshi was a normal middle school punk until he was hit and killed by a car, while saving a child. His selfless action earned him the right to gain his life back and serve as a detective of the spirit world, keeping the world of the living safe from a myriad of demons.",
            image: "images/yu-yu-hakusho-1-190x285.jpg"
        },
     
        {
            title: "Saiyuki",
            description: "In the mystical world of Shangri-la, demons and humans live side by side, watched over by a parthenon of ancient Chinese gods. But when normally-civilized demons start to go berserk, the gods require the services of Genjou Sanzo - a Buddhist priest with a magical gun, an evil-banishing scripture and a take-no-prisoners attitude.",
            image: "images/saiyuki-1-190x268.jpg"
        },
        {
            title: "Photon The Idoit Adventures",
            description: "A troublesome girl named Aun has stolen her village's holy item and has run away to marry a rock star; and because this sort of thing has happened before, her adopted brother Photon, a slightly clueless boy with superhuman strength, has been sent after her.",
            image: "images/photon-the-idiot-adventures-1-190x270.jpg"
        },
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

