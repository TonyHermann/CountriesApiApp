const main = document.querySelector('main');
const main2 = document.getElementsByTagName('main');
const body = document.querySelector('.body');
const body2 = document.getElementsByTagName('body');
const html1 = document.querySelector('#html');
const html2 = document.getElementsByTagName('html');
const p = document.getElementsByTagName('p');
const h1 = document.getElementsByTagName('h1');
const span = document.getElementsByTagName('span');
const dnButton = document.querySelector('.style-button-toggle');
const logo = document.querySelector('#logo');
let dataLALA 
let dataXD
const searchInput = document.querySelector('#search');
const countryList = {
    countries: []
}
// https://restcountries.eu/rest/v2/all


const showCountry = (itemone, itemtwo) => {

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // LOGO CLICK BACK TO INDEX
    logo.addEventListener('click', function(e){
        clearContent();
        init(dataLALA, 'load');
        try {
            if (overlay) {
                overlay.remove();
            }
        body.classList.remove('fix-body');
        main.classList.remove('position-absolute');
        } catch (error) {
            console.log(error);
        }
    })


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
    
            languageList.lang = [...lang, `${langu.name} `];
        });

      



        const languages = document.createElement('p');
        languages.innerHTML = `Languages: <span>${languageList.lang}</span>`;
     


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

        const { country } = borderCountriesList;
        borderCountriesList.country = [...country, `<span>${countrya}</span>`];
        console.log(borderCountriesList.country);
        
    });

    const divBorderCountries = document.createElement('div');
    divBorderCountries.classList.add('overlay__content-border__countries');
    divBorderCountries.innerHTML = `${borderCountriesList.country}`;
 
    divBorderCountries.addEventListener('click', function(e) {
        let code = e.target.textContent;
        const countryLink = dataLALA.filter(country => {
            return country.alpha3Code.includes(code);
        });
        console.log(countryLink);
        clearContent();
        init(countryLink, 'load');
        overlay.remove();
        body.classList.remove('fix-body');
        main.classList.remove('position-absolute');
        main.classList.remove('hidden');
        
    })


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

    
    const first = body.firstElementChild.nextElementSibling;

    body.insertBefore(overlay, first);
    // body.classList.add('fix-body');
   

    window.scrollTo(0, 0)
    const main = document.querySelector('.container')
    main.classList.add('hidden');

    button.onclick = function() {
        overlay.remove();
        body.classList.remove('fix-body');
        main.classList.remove('position-absolute')
        main.classList.remove('hidden');
    }

};

const selectCountry = (card, LALA) => {
    card.addEventListener('click', function(e) {

        console.log( body.scrollTop)
        const selectedCountry = card.children;

        const selectedCountry_image = selectedCountry[0].firstElementChild.src;
        // console.log(selectedCountry_image);
        const selectedCountry_content = selectedCountry[1]; // DONT TOUCH
            const selectedCountry_content_population = (selectedCountry_content.children)[[1][0]];
            // console.log(selectedCountry_content_population.children[0].textContent)

            const selectedCountry_content_region = (selectedCountry_content.children)[[2][0]];
            // console.log(selectedCountry_content_region.children[0].textContent)

            const selectedCountry_content_capital = (selectedCountry_content.children)[[3][0]];
            // console.log(selectedCountry_content_capital.children[0].textContent)
            
            
        const selectedCountryItems = {
            flag: selectedCountry_image,
            countryName: selectedCountry_content.firstElementChild.textContent,
            population: selectedCountry_content_population.children[0].textContent,
            region: selectedCountry_content_region.children[0].textContent,
            capital: selectedCountry_content_capital.children[0].textContent
        }
        showCountry(LALA, selectedCountryItems);
        
    })
};

const init = (data, type) => {

  

    
    const fatherDiv = document.querySelector('.countries-container');

    let id = 0;
   
    data.forEach((country) => {

     
        if ( fatherDiv.childElementCount + 1 > data.length) {
            return
        }
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
        
        if (country.flagA) {
            img.src = country.flagA;
        title.textContent = country.nameB;
        // console.log(populationA);
            spanPopulation.textContent = country.populationA;
            spanRegion.textContent = country.regionA;
            spanCapital.textContent = country.capitalA;
        } else {
         
            img.src = flag;
            title.textContent = name;
            // console.log(populationA);
                spanPopulation.textContent = population;
                spanRegion.textContent = region;
                spanCapital.textContent = capital;
        }
        

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

        if (type === 'search') {
            
            let itemoneE = {
                // flag: selectedCountry_image,
                // countryName: selectedCountry_content.firstElementChild.textContent,
                // population: selectedCountry_content_population.children[0].textContent,
                // region: selectedCountry_content_region.children[0].textContent,
                // capital: selectedCountry_content_capital.children[0].textContent
                nativeName: country.nativeNameA,
                subregion: country.subregionA,
                toplvldomain: country.toplvldomainA,
                currencies: country.currenciesA,
                languages: country.languagesA,
                borders: country.bordersA
                
            }
  
            selectCountry(div, itemoneE);
        } else if (type === 'load') {
            let itemoneE = {
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
            selectCountry(div, itemoneE);
        }

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
            init(data, 'load');
            getData(data);
            dataLALA = data;
        })
        .catch(function(err){
            console.log(err);
        })
    } catch (error) {
        console.log(error) 
    }
}

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

         
            for (var i = 0, len = html2.length; i < len; i++) {
                // elements[i].style ...
                html2[i].classList.add('night');
            }
     
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

const clearContent = (data) => {
    
    const countriesContainer = document.querySelector('.countries-container');
    while ( countriesContainer.firstChild ) {
        countriesContainer.removeChild(countriesContainer.firstChild);
    }
    
};

const showError = (message, type) => {
    const fatherDiv = document.querySelector('.countries-container');
    const error = document.createElement('p');
    error.classList.add(`${type}`);
    error.textContent = `${message}`;
    fatherDiv.appendChild(error);
}

const searchBar = (contryList) => {

   

    const showNewCards = (group) => {
        clearContent();
        for (const country of group) {
            const filter = document.querySelector('#filter');
            filter.value = 'All';
            init(group, 'search');
        }
        if ( group.length === 0) {
            setNoResults();
        }
    }

    const setNoResults = () => {
        const filter = document.querySelector('#filter');
            filter.value = 'All';
        showError(`There's no country that matches with your search term, please, try again in English`, `error`);
    } 

    const getRelevancy = (value, searchTerm) => {
        if ( value === searchTerm) {
            return 2;
        } else if( value.startsWith(searchTerm)) {
            return 1;
        } else if ( value.includes(searchTerm)) {
            return 0;
        }
    }

    searchInput.addEventListener('change', function(e) {
        let value = e.target.value;
        if(value && value.trim().length > 0) {
            value = value.trim().toLowerCase();
            // console.log(country);
            showNewCards(countryList.countries.filter(country => {
                return country.nameA.includes(value)
            }).sort((countryA, countryB) => {
                return getRelevancy(countryB.nameA, value) - getRelevancy(countryA.nameA, value);
            }));
        } else {
            const filter = document.querySelector('#filter');
            filter.value = 'All';
            clearContent();
            backToStart(dataLALA);
        }
    });
}

const getData = (data) => {
    data.forEach((country)=> {
        const { flag, name, population, region, capital, nativeName, subregion, topLevelDomain, currencies, languages, borders } = country;
        
        const countryObj = {
            flagA: country.flag,
            nameA: country.name.toLowerCase(),
            nameB: country.name,
            populationA: country.population,
            regionA: country.region, 
            capitalA: country.capital,
            bordersA: country.borders,
            currenciesA: country.currencies,
            languagesA: country.languages, 
            nativeNameA: country.nativeName,
            subregionA: country.subregion,
            toplvldomainA: country.topLevelDomain
        }

        addCountryToList(countryObj);

       
    });
}

const addCountryToList = (item) => {
    const { countries } = countryList;
    countryList.countries = [...countries, item];
    if (countryList.countries.length >= 250) {
        searchBar(countryList.countries);
    }
}

const backToStart = (data) => {
    init(data, 'load');
}   

const filterInput = () => {
    const filter = document.querySelector('#filter')
    console.log(filter)
    filter.addEventListener("change", function(e){
        if(this.value === 'All') {
            clearContent();
  
            
            init(dataLALA, 'load');
        }
        if(this.value === 'Europe') {
            clearContent();
            
            const dataEurope = dataLALA.filter(country => {
                return country.region.includes('Europe');
            });
            searchInput.addEventListener('change', function(){
                searchBar(dataEurope);
                console.log('searching on europe');
            })
      
            init(dataEurope, 'load');
        }
        if(this.value === 'Africa') {
            clearContent();
     
            const dataAfrica = dataLALA.filter(country => {
                return country.region.includes('Africa');
                
            });
    
            init(dataAfrica, 'load');
        }
        if(this.value === 'Oceania') {
            clearContent();
           
            const dataOceania = dataLALA.filter(country => {
                return country.region.includes('Oceania');
                
            });
       
            init(dataOceania, 'load');
        }
        if(this.value === 'Asia') {
            clearContent();
          
            const dataAsia = dataLALA.filter(country => {
                return country.region.includes('Asia');
                
            });
        
            init(dataAsia, 'load');
        }
        if(this.value === 'America') {
            clearContent();
   
            const dataAmerica = dataLALA.filter(country => {
                return country.region.includes('America');
                
            });
     
            init(dataAmerica, 'load');
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    launchApp();
    
    dnButtonF();

    filterInput();
});