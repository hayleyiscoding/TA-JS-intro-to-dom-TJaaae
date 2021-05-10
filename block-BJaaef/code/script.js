
let rootElement = document.querySelector('ul');

got.houses.people.forEach(char => {
    let li = document.querySelector('li');
    let img = document.querySelector('img');
    img.src = char.image;
    img.alt = char.name;
    let span = document.querySelector('span');
    span.innerText = char.name;
    let p = document.querySelector('p');
    p.innerText = char.description;
    let btn = document.querySelector('button');
    btn.innerText = "Learn More!";
    li.append(img, span, p, btn);
    rootElement.append(li);
})