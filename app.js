const projects =
    [
        {
            "title": "Hidden search widget",
            "description": "This is widget, when you click icon of search it shows input to write string for search",
            "link": "./hidden_search_widget/index.html"
        },
        {
            "title": "Expanding cards",
            "description": "This could be nice for show galery of photos",
            "link": "./expanding_cards/index.html"
        },
        {
            "title": "Progress step",
            "description": "To showing progress for 4 step",
            "link": "./progress_step/index.html"
        },
        {
            "title": "Rotating navigation",
            "description":  "Menu, click button of hamburger menu and check where menu of page will show",
            "link": "./rotating_navigation/index.html"
        },

        {
            "title": "Button ripple effect",
            "description": "Nice effect to show that button was clicked",
            "link": "./button_ripple_effect/index.html"
        },
        {
            "title": "Blurry loading",
            "description": "Project for menu, click button for hamburger menu i check where menu of page will show",
            "link": "./blurry_loading/index.html"
        },
        {
            "title": "Scroll Animation",
            "description": "Nice animation to load of element of page when scrolling",
            "link": "./scroll_animation/index.html"
        },
        {
            "title": "Split Landing Page",
            "description": "Presentation of two products by diving screen",
            "link": "./split_loading_page/index.html"
        },
        {
            "title": "Form Wave Animation",
            "description": "Form field with label floating like wave",
            "link": "./form_wave_animation/index.html"
        },
        {
            "title": "Sound Board",
            "description": "Buttons with audio effect- practise for audio html tag",
            "link": "./sound_bar/index.html"
        },
        {
            "title": "Dad jokes",
            "description": "Easy Example how to use API and show response in asynchronous way",
            "link": "./dad_jokes/index.html"
        },
        {
            "title": "Event Key Code",
            "description": "Very simple mini-project to show event code of key from keyboard. To see a effect just hit a keyboard",
            "link": "./event_key_codes/index.html"
        },
        {
            "title": "Flex-practise",
            "description": "Page build on CSS Flex by Keith J. Grant (no JS, so this is only view)",
            "link": "./flex-practise/index.html"
        },
        // {
        //     "title": "Resize split view",
        //     "description": "TO DO",
        //     "link": "./resize-split-view/index.html"
        // },
        // {
        //     "title": "PackMovingGO company website",
        //     "description": "TO DO",
        //     "link": "./pack-moving-go/index.html"
        // },
        {
            "title": "FAQ Boxes",
            "description": "Example of view for Frequantly Asked, Questions, but also can be for science quiz",
            "link": "./FAQ_boxes/index.html"
        },
        {
            "title": "Random Choice Picker",
            "description": "First entry your choices separated by comma, and check what fate chose for you ",
            "link": "./random_choice_picker/index.html"
        },
        {
            "title": "Netflix Logo",
            "description": "I make logo of Netflix in CSS for practise",
            "link": "./netflix_logo/index.html"
        },

        {
            "title": "Animated Navigation",
            "description": "Brad Traversy Course how to make navigation menu, which animated changed when you click icons",
            "link": "./animated_navigation/index.html"
        },


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