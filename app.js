const projects =
    [
        {
            "title": "Hidden search",
            "description": "This is widget, when you click icon of search it shows input to write string for search",
            "link": "./hidden_search_widtge/index.html"

        }

    ];


const container = document.querySelector('main.container');

projects.forEach(item => {
    const div =document.createElement('div');
    const title =document.createElement('h2');
    const description =document.createElement('p');
    const link = document.createElement('a');
    div.classList.add('container__item');
    title.classList.add('container__title');
    description.classList.add('container__description');
    link.classList.add('container__link');
    title.innerText = item.title;
    description.innerText = item.description;
    link.href = item.link;
    link.innerText = 'See here';
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(link);
    container.appendChild(div);
})