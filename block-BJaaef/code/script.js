let allPeople = got.houses.reduce(
    (acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let parentElem = document.querySelector('.mainbox');

let cardsHTML = allPeople.map(
    person => {
        return `<li class = "card flex-center flex-30">
            <div class = "info flex">
                <img 
                src = "${person.image}" 
                alt = "${person.name}"
                />
                <h2>${person.name}</h2>
            </div>
            <p>${person.description}</p>
            <a href = "${person.wikiLink}">Learn More!</a>
        </li>`;
    }
);

parentElem.innerHTML = cardsHTML.join("");
