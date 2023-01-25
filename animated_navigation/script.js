const btn = document.querySelector('#toggle');
const nav = document.querySelector('#nav');

  btn.addEventListener('click', () => {
        console.log(nav.classList)
        nav.classList.toggle('active')
    });

  