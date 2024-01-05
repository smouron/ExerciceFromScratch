console.log("Le script est lancé");
const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
const inputSearch = document.getElementById("inputSearch");
const minToMax = document.getElementById("minToMax");
const maxToMin = document.getElementById("maxToMin");
const alpha = document.getElementById("alpha");
const countriesContainer = document.querySelector(".countries-container");
let countries = [];

// console.log(inputSearch);
inputRange.value = rangeValue.textContent;

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));

  console.log(countries);
  console.log("Nombre total de pays: " + countries.length);

  countriesDisplay();
}

function countriesDisplay(data) {
  countriesContainer.innerHTML = countries
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .slice(0, inputRange.value)
    .map((country) => {
      // Si le filtre a été activé, recherche du termes demandé
      if (
        data &&
        country.translations.fra.common.toLowerCase().search(data) < 0
      ) {
        console.log("Mots recherché :" + data);
        // console.log(country.translations.fra.common.toLowerCase().search(data));
        return;
      }

      let currencies = [];
      let languages = [];
      let capital = `<h3 class="capital hidden"></h3>`;
      if (country.capital) {
        capital = `<h3 class="capital">${country.capital}</h3>`;
      }

      let region = `<p>${country.region}</p>`;

      if (country.subregion) {
        region = `<p>${country.region} - ${country.subregion}</p>`;
      }

      // Récupération des monnaies du pays
      if (country.currencies) {
        let nbCurrencies = Object.getOwnPropertyNames(country.currencies)
          .length;

        let currency = Object.getOwnPropertyNames(country.currencies);
        let nameCurrency = country.currencies[`${currency[0]}`].name;
        let symbolCurrency = country.currencies[`${currency[0]}`].symbol;
        if (symbolCurrency) {
          currencies.push(`${nameCurrency} (${symbolCurrency}) `);
        } else {
          currencies.push(`${nameCurrency} `);
        }
      }

      if (country.languages) {
        // Récupération des langues du pays
        let nbLanguages = Object.getOwnPropertyNames(country.languages).length;
        for (let i = 0; i < nbLanguages; i++) {
          let language = Object.getOwnPropertyNames(country.languages);
          let data = country.languages[`${language[i]}`];
          // console.log(data);
          // currencies.push("<li>" + nameCurrency + " (" + symbolCurrency + ")</li>);
          languages.push(data);
          if (i < nbLanguages - 1 && nbLanguages != 1) {
            languages.push(" / ");
          }
        }
      }

      // Formate l'affichage du nombre passé en paramètre
      let int1 = new Intl.NumberFormat();

      // ${int1.format(country.population)} ou ${country.population.toLocaleString()}
      return `
        <a href="${country.maps.googleMaps}" class="card" title="${
        country.translations.fra.common
      }" target="_blank">
          <img src=${country.flags.svg} alt="photo ${country.alt}">
            <h2 class="name">${country.translations.fra.common}</h2>
            ${capital}
            ${region}
            <p>Langue(s) parlée(s) : ${languages.join("")}</p>
            <p>Monnaie locale : ${currencies.join("")}</p>
            <p>${country.population.toLocaleString()} habitant(s)</p>
          </a>
          `;
    })
    .join("");
}

// On surveille si le nombre de pays à afficher à été modifié
//    inputRange.addEventListener("input", () => {});
//    inputRange.addEventListener("change", () => {});
inputRange.addEventListener("input", (e) => {
  //  On change la valeur affichée
  rangeValue.textContent = e.target.value;
  countriesDisplay();
});

// Récupéraration de la liste des cards
window.addEventListener("load", fetchCountries);

// Tri croissant
minToMax.addEventListener("click", (e) => {
  // console.log(countries);
  countries.sort((a, b) => a.population - b.population);
  countriesDisplay();
});

// Tri décroissant
maxToMin.addEventListener("click", (e) => {
  // console.log(countries);
  countries.sort((a, b) => b.population - a.population);
  countriesDisplay();
});

// Tri alphabétique
alpha.addEventListener("click", (e) => {
  // console.log(countries);
  countries.sort((a, b) =>
    a.translations.fra.common.localeCompare(b.translations.fra.common)
  );
  // console.log(countries);
  countriesDisplay();
});

// Recherche
//   inputSearch.addEventListener("input", countriesDisplay);
inputSearch.addEventListener("input", (e) => {
  countriesDisplay();
});
