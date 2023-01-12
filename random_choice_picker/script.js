const textes = document.querySelector('#choices');
const tags = document.querySelector('#tags');

textes.focus();
textes.addEventListener("keyup", (event) => {
    switch (event.code) {
        case "Comma":
            createTags(event.target.value);
            break;
        case "Enter":
            event.target.value = '';
            chooseChoice(event.target.value);
            break;
        default:
            break;
    }
});

function createTags(input) {
    tags.innerHTML = '';
    const arr = input.split(',').map(item => item.trim()).filter(tag => Boolean(tag));
    arr.forEach(elem => {
        const dives = document.createElement('div');
        dives.classList.add('tag');
        dives.innerText = elem;
        tags.appendChild(dives);
    });
}

function chooseChoice() {
    const tagis = document.querySelectorAll('.tag');
    const interval = setInterval(() => {
        const random = ~~(Math.random() * tagis.length) + 1;
        setTimeout(() => {
            tagis.forEach(tag => tag.classList.remove('highlight'));
            tagis[random - 1].classList.add('highlight');

        }, 100)
        
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
    }, 2000);


}

