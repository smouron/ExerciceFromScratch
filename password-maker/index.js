// alert("Démarrage du script !");
console.log("Démarrage du script !");

const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$£€&àâäéèêëîïôöùç!?@%()[]{}#-+/*:;,._'\"";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  console.log("Je génére un mot de passe");
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length == 0) {
    alert("Il faut sélectionner au moins un critère.");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  console.log(password);
  passwordOutput.value = password;

  //   Selectionner le mot de passe qui vient d'être créé et le copier dans le press papier
  //   passwordOutput.select();
  //   document.execCommand("copy");
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Mot de passe copié dans le press papier";

  setTimeout(() => {
    generateButton.textContent = "Générer un mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
