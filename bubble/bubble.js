const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleMaker = () => {
	const bubble = document.createElement("span");
	bubble.classList.add("bubble"); // Ajouter la class bubble à <span>
	document.body.appendChild(bubble); // Ajoute <span> entre <body> et </body>

	// Donne une dimension aléatoire
	const size = Math.random() * 200 + 50; // donne une valeur aléatoire de 50 à 250
	const sizeAround = Math.round(size.toFixed(0)) + "px"; // arrondi la valeur

	bubble.style.height = sizeAround;
	bubble.style.width = sizeAround;

	// Donne une position aléatoire
	bubble.style.top = Math.random() * 60 + 50 + "%";
	bubble.style.left = Math.random() * 100 + "%";

	const plusMinus = Math.random() > 0.5 ? 1 : -1; /* comme un IF */
	bubble.style.setProperty("--left", Math.random () * 100 * plusMinus + "%");

	bubble.addEventListener("click", () => {
		counter++;
		counterDisplay.textContent = counter; /* Remplace le texte dans h3 par la nouvelle valeur */
		bubble.remove();
	});

	// Supprimer automatiquement la bulle au bout de 6s
	setTimeout(() => { 
		bubble.remove();
	},6000);
};

bubbleMaker();
setInterval(bubbleMaker, 1000);
