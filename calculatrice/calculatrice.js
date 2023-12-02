// Déclaration des variables
const buttons = document.querySelectorAll('.btn');
const screenResult = document.getElementById("screenResult");
const screenOperation = document.getElementById("screenOperation");
const screenValues = document.querySelectorAll(".screenValue");
let imputValue = "0";
let dot = false;

// On initialise les valeurs affichées
screenResult.textContent = "0.00";
let result = screenResult.textContent;
screenOperation.textContent = "0";
let operation = screenOperation.textContent ;

// Pour diffuser un son
const sonTouche = () => {
	const audio = new Audio();
	audio.src = "./sounds/2180.mp3";
	audio.volume = 0.1;
	audio.play();
};

console.log(operation);

// console.log(button);
console.log(screenResult);

// récupération du texte des boutons 
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		let data = e.target.id;
		console.log("Touche de la calculatrice qui a été activée : " + data);
		
		// si on utilise une sigle d'opération
		// si 0 à l'affichage des saisies ==> on récupére le total et on y ajoute le sigle
		// si non on ajoute le sigle à la valeur à l'écran
		if (data == "/" || data == "*" || data == "+" || data == "-" ) {
			if (operation == "0") {
				operation = result + data;								
			} else {
				operation += data;
			}			
			imputValue = "0";
			dot = false;
		}
		
		// si on utilise le point, on ajout un 0 avant le point s'il n'y a aucun chiffre
		if (data == "." && dot === false) {
			if (imputValue == "0") {
				if (operation == "0") {
					operation = "0" + data;
				} else {
					operation += "0" + data;
				}
			} else {
					operation += data;
			}
			imputValue = data
			dot = true;
		}
		
		// si on utilise le double 0, on ne l'ajoute que s'il y a déjà un chiffre devant
		if (data == "00"){
			if (imputValue != "0") {
				operation += data;
				imputValue = "00"
			}			
		}
	
		// si on utilise une sigle d'opération
		// si 0 à l'affichage des saisies ==> on récupére le total et on y ajoute le sigle
		// si non on ajoute le sigle à la valeur à l'écran
		if (!isNaN(data) && data != "00") {
			if (operation == "0") {
				operation = data;
			} else {
				operation += data;
			}
			imputValue += data
		}
		
		if (operation.length > 8) {
			screenOperation.textContent = operation.substring((operation.length-8),operation.length);
		} else {
			screenOperation.textContent = operation;
		}
		
		sonTouche();
	});
});

// Récupèrer une touche qui est actionnée
document.addEventListener("keypress", (e) => {
	let data = e.key;
	console.log("Touche du clavier PC qui a été utilisée : " + data);		
	
	if (data == " ") {
		return;
	}
	// si on utilise une sigle d'opération
	// si 0 à l'affichage des saisies ==> on récupére le total et on y ajoute le sigle
	// si non on ajoute le sigle à la valeur à l'écran
	if (data == "/" || data == "*" || data == "+" || data == "-" ) {
		if (operation == "0") {
			operation = result + data;								
		} else {
			operation += data;
		}			
		imputValue = "0"
		dot = false;
	}
		
	// si on utilise le point, on ajout un 0 avant le point s'il n'y a aucun chiffre
	if (data == "." && dot === false) {
		if (imputValue == "0") {
			if (operation == "0") {
				operation = "0" + data;
			} else {
				operation += "0" + data;
			}
		} else {
				operation += data;
		}
		imputValue = data;
		dot = true;
	}

	// si on utilise une svaleur numérique
	// si 0 à l'affichage des saisies ==> on remplace ce le 0 par la valeur saisie
	// si non on ajoute la valeur saisie
	if (!isNaN(data) && data != "00") {
		if (operation == "0") {
			operation = data;
		} else {
			operation += data;
		}
		imputValue += data
	}
	
	if (data === "Enter") {
		result = (Math.round(eval(operation) * 100)/100).toFixed(2) + "";
		console.log("Résultat : " + result + " (" + result.length + " caract.)");
		// Contrôle la longueur du résultat pour voir si cela rentre à l'affichage
		if (result.length >= 13) {
			screenResult.textContent = result.substring((result.length-13),result.length);
			console.log("Attention ! Le résultat est trop grand");
			alert("Attention ! Le résultat est trop grand");
		} else {
			screenResult.textContent = result;
		}	
		screenOperation.textContent = "0";
		operation = "0";
		imputValue = "0";
		dot = false;
	}
	
	if (operation.length > 8) {
		screenOperation.textContent = operation.substring((operation.length-8),operation.length);
	} else {
		screenOperation.textContent = operation;
	}
	sonTouche();
});


equal.addEventListener('click', () => {	
	result = (Math.round(eval(operation) * 100)/100).toFixed(2) + "";
	console.log("Résultat : " + result + " (" + result.length + " caract.)");
	// Contrôle la longueur du résultat pour voir si cela rentre à l'affichage
	if (result.length >= 13) {
		screenResult.textContent = result.substring((result.length-13),result.length);
		console.log("Attention ! Le résultat est trop grand");
		alert("Attention ! Le résultat est trop grand");
	} else {
		screenResult.textContent = result;
	}	
	screenOperation.textContent = "0";
	operation = "0";
	imputValue = "0";
	dot = false;
	sonTouche();
});

// Remise à zéro de l'affichage de la saisie
clear.addEventListener('click', () => {
	screenOperation.textContent = "0";
	operation = "0";
	imputValue = "0";
	dot = false;
	sonTouche();
});

// Remise à zéro des 2 affichages
clearall.addEventListener('click', () => {
	screenOperation.textContent = "0";
	operation = screenOperation.textContent;
	screenResult.textContent = "0.00";
	result = screenResult.textContent;
	imputValue = "0";
	dot = false;
	sonTouche();
});