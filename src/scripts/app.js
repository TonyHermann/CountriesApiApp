

const main = document.querySelector('main');
const main2 = document.getElementsByTagName('main');
console.log(main2[0].children);
const body = document.querySelector('.body');
const body2 = document.getElementsByTagName('body');
const html1 = document.querySelector('#html');
const html2 = document.getElementsByTagName('html');
const p = document.getElementsByTagName('p');
const h1 = document.getElementsByTagName('h1');
const span = document.getElementsByTagName('span');
const dnButton = document.querySelector('.style-button-toggle');


const showCountry = (itemone, itemtwo) => {
    console.log("initializing showCountry()")
    console.log(itemone);
    console.log(itemtwo);


    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const divButton = document.createElement('div');
    divButton.classList.add('back_button');
    
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Back';
    divButton.appendChild(button);

    
    const divFlag = document.createElement('div');
    divFlag.classList.add('flag');

    const img = document.createElement('img');
    img.src = itemtwo.flag;

    divFlag.appendChild(img);


    const title = document.createElement('p');
    title.textContent = itemtwo.countryName;
    console.log("NOMBREEEEEEE"+itemtwo.name);
    title.classList.add('overlay__content-title');

    const divData = document.createElement('div');
    divData.classList.add('overlay__content-data');

    const nativeName = document.createElement('p');
        nativeName.innerHTML = `Native name: <span>${itemone.nativeName}</span>`;
    const population = document.createElement('p');
        population.innerHTML = `Population: <span>${itemtwo.population}</span>`;
    const region = document.createElement('p');
        region.innerHTML = `Region: <span>${itemtwo.region}</span>`;
    const subRegion = document.createElement('p');
        subRegion.innerHTML = `Sub region: <span>${itemone.subregion}</span>`;
    const capital = document.createElement('p');
        capital.innerHTML = `Capital: <span>${itemtwo.capital}</span>`;
    const topLevelDomain = document.createElement('p');
        topLevelDomain.innerHTML = `Top Level Domain: <span>${itemone.toplvldomain}</span>`;
    const currencies = document.createElement('p');
        currencies.innerHTML = `Currencies: <span>${itemone.currencies[0].name} ${itemone.currencies[0].code} ${itemone.currencies[0].symbol}</span>`;
    

        const languageList = {
            lang: ''
        };
        const lala = itemone.languages
        lala.forEach(function(langu){
            const { lang } = languageList;
            console.log(langu.name);
            languageList.lang = [...lang, `${langu.name} `];
        });

        console.log(languageList);



        const languages = document.createElement('p');
        languages.innerHTML = `Languages: <span>${languageList.lang}</span>`;
        console.log(itemone.languages);


    divData.appendChild(nativeName);
    divData.appendChild(population);
    divData.appendChild(region);
    divData.appendChild(subRegion);
    divData.appendChild(capital);
    divData.appendChild(topLevelDomain);
    divData.appendChild(currencies);
    divData.appendChild(languages);

    const divBorder = document.createElement('div');
    divBorder.classList.add('overlay__content-border');
    
    const divBorderTitle = document.createElement('div');
    divBorderTitle.classList.add('overlay__content-border__title');
    divBorderTitle.innerHTML = `<p>Border countries :</p>`;

    
    
    let borderCountriesList = {
        country: '',
    };

    let borderCountries = itemone.borders;
    borderCountries.forEach(function(countrya){
        console.log(countrya);
        const { country } = borderCountriesList;
        borderCountriesList.country = [...country, `<span>${countrya}</span>`];
    });

    const divBorderCountries = document.createElement('div');
    divBorderCountries.classList.add('overlay__content-border__countries');
    divBorderCountries.innerHTML = `${borderCountriesList.country}`;
    console.log(itemone.borders);

    divBorder.appendChild(divBorderTitle);
    divBorder.appendChild(divBorderCountries);

    const divContent = document.createElement('div');
    divContent.classList.add('content');
            divContent.appendChild(title);
            divContent.appendChild(divData);
            divContent.appendChild(divBorder);

    const divCountryInfo = document.createElement('div');
    divCountryInfo.classList.add('countryinfo');
            divCountryInfo.appendChild(divFlag);
            divCountryInfo.appendChild(divContent);

    overlay.appendChild(divButton);
    overlay.appendChild(divCountryInfo)

    button.onclick = function() {
        overlay.remove();
        body.classList.remove('fix-body');
        main.classList.remove('position-absolute')
    }

    const first = body.firstElementChild.nextElementSibling;

    body.insertBefore(overlay, first);
    body.classList.add('fix-body');
};

const selectCountry = (card, itemone) => {
    card.addEventListener('click', function(e) {
        console.log(e);
        console.log("click!")

        const selectedCountry = card.children;
        const selectedCountry_image = selectedCountry[0].firstElementChild.src;
        console.log(selectedCountry_image);
        const selectedCountry_content = selectedCountry[1]; // DONT TOUCH
            const selectedCountry_content_population = (selectedCountry_content.children)[[1][0]];
            console.log(selectedCountry_content_population.children[0].textContent)

            const selectedCountry_content_region = (selectedCountry_content.children)[[2][0]];
            console.log(selectedCountry_content_region.children[0].textContent)

            const selectedCountry_content_capital = (selectedCountry_content.children)[[3][0]];
            console.log(selectedCountry_content_capital.children[0].textContent)
            
            
        const selectedCountryItems = {
            flag: selectedCountry_image,
            countryName: selectedCountry_content.firstElementChild.textContent,
            population: selectedCountry_content_population.children[0].textContent,
            region: selectedCountry_content_region.children[0].textContent,
            capital: selectedCountry_content_capital.children[0].textContent
        }

        showCountry(itemone, selectedCountryItems);
        
    })
};

const init = (data) => {

  

    console.log(data.length);
    const fatherDiv = document.querySelector('.countries-container');

    let id = 0;
   
    data.forEach((country) => {
        
        // if (x > 50) {
        //     console.log(x)
        //     return
        // }

        // console.log(country);
        const { flag, name, population, region, capital } = country;
        let { nativeName, subregion, topLevelDomain, currencies, languages, borders } = country;

        let div = document.createElement('div');
        div.classList.add('card');

        div.setAttribute('data-id',  `${id}`);
        id++;

        let card__image = document.createElement('div');
        card__image.classList.add('card__image');
            let img = document.createElement('img');

        let card__content = document.createElement('div');
        card__content.classList.add('card__content');
            let title = document.createElement('p');
                title.classList.add('card__content-title');
            let populationA = document.createElement('p');
                populationA.classList.add('card__content-subtitle');
                let spanPopulation = document.createElement('span');
                    spanPopulation.classList.add('card__content-span')
            let regionA = document.createElement('p');
                regionA.classList.add('card__content-subtitle');
                let spanRegion = document.createElement('span');
                    spanRegion.classList.add('card__content-span')
            let capitalA = document.createElement('p');
                capitalA.classList.add('card__content-subtitle');
                let spanCapital = document.createElement('span');
                    spanCapital.classList.add('card__content-span')
        

        // console.log('asignando variables')
        img.src = flag;
        title.textContent = name;
        // console.log(populationA);
            spanPopulation.textContent = population;
            spanRegion.textContent = region;
            spanCapital.textContent = capital;

        card__image.appendChild(img);
         
        
        card__content.appendChild(title);
        
        card__content.appendChild(populationA);
        
            populationA.innerHTML = `Population: <span class="card__content-span">${spanPopulation.textContent}</span>`;
            
        card__content.appendChild(regionA);
        
            regionA.innerHTML = `Region: <span class="card__content-span">${spanRegion.textContent}</span>`;
            
        card__content.appendChild(capitalA);
        
            capitalA.innerHTML = `Capital: <span class="card__content-span">${spanCapital.textContent}</span>`;

        div.appendChild(card__image);
        div.appendChild(card__content);
        
        fatherDiv.appendChild(div);
    


        const itemone = {
            // flag: selectedCountry_image,
            // countryName: selectedCountry_content.firstElementChild.textContent,
            // population: selectedCountry_content_population.children[0].textContent,
            // region: selectedCountry_content_region.children[0].textContent,
            // capital: selectedCountry_content_capital.children[0].textContent
            nativeName: country.nativeName,
            subregion: country.subregion,
            toplvldomain: country.topLevelDomain,
            currencies: country.currencies,
            languages: country.languages,
            borders: country.borders
        }

        selectCountry(div, itemone);

    })
    
}

const launchApp = () => {
    try {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(function(res){
            console.log(res);
            return res.json();
        })
        .then(function(data){
            init(data);
        })
        .catch(function(err){
            console.log(err);
        })
    } catch (error) {
        console.log(error) 
    }
}

// https://restcountries.eu/rest/v2/all
const dnButtonF = () => {
    dnButton.addEventListener('click', function(){
        if (html1.classList.contains('night')){

            const dnButtonIMG = document.querySelector('#style-button-toggle__img');
            dnButtonIMG.src = './build/img/moon.png';

            const dnButtonTC = document.querySelector('.style-button-toggle__span');
            dnButtonTC.innerHTML = '';
            dnButtonTC.innerHTML = 'Night mode';

            
            for (var i = 0, len = html2.length; i < len; i++) {
                // elements[i].style ...
                html2[i].classList.remove('night');
            }
            console.log(body2);
            for (var i = 0, len = body2.length; i < len; i++) {
                // elements[i].style ...
                body2[i].classList.remove('night');
            }
            const searchBar = document.querySelector('#search');
            searchBar.classList.remove('night');
            const select = document.querySelector('#filter');
            select.classList.remove('night');

            
        } else {

            const dnButtonTC = document.querySelector('.style-button-toggle__span');
            dnButtonTC.innerHTML = '';
            dnButtonTC.innerHTML = 'Day mode';

            const dnButtonIMG = document.querySelector('#style-button-toggle__img');
            dnButtonIMG.src = './build/img/sun.png';

            console.log('hola');
            for (var i = 0, len = html2.length; i < len; i++) {
                // elements[i].style ...
                html2[i].classList.add('night');
            }
            console.log(body2);
            for (var i = 0, len = body2.length; i < len; i++) {
                // elements[i].style ...
                body2[i].classList.add('night');
            }
            const searchBar = document.querySelector('#search');
            searchBar.classList.add('night');
            const select = document.querySelector('#filter');
            select.classList.add('night');
        }
    });
}



document.addEventListener('DOMContentLoaded', () => {
    launchApp();
    
    dnButtonF();

    // setDay();
});