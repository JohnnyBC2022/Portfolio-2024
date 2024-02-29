const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");


/* Dentro de la función del evento, e es el objeto de evento. preventDefault() se llama para evitar que la acción predeterminada del clic ocurra. En el contexto de un enlace (<a>), esto evitará que el navegador siga el enlace de los items */
bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});
moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});



const videos = [
    {
        id: "PyMlV5_HRWk",
    },
    {
        id: "HZtc5-syeAk",
    },
    {
        id: "Fmdb-KmlzD8",
    },
    {
        id: "lOthvD1rMbQ",
    },
    {
        id: "nXDk86lQhto",
    },
];

/* const sliderContainer = document.querySelector('#slider'); */
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videos-container');
const bNext = document.querySelector('#next');
const bPrev = document.querySelector('#prev');
let current = 0;

bNext.addEventListener('click', (e) => {
    let changed = current;
    current = current + 1 < videos.length ? current + 1 : current;
    if (current !== changed) {
        renderCurrentVideo(videos[current].id);
    }
})
bPrev.addEventListener('click', (e) => {
    let changed = current;
    current = current - 1 > 0 ? current - 1 : current;
    if (current !== changed) {
        renderCurrentVideo(videos[current].id);
    }
})

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id) {
    currentContainer.innerHTML = `<iframe width="100%" height="685" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}

function renderVideos() {
    const html = videos.map((video, index) => {
        return `
        <div class="item">
            <a href="#" data-id="${index}">
                <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
            </a>
        </div>`;

    });
    videosContainer.innerHTML = html.join("")

    document.querySelectorAll(".item a").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const id = +item.getAttribute("data-id"); // con el operador + convertimos el string en un número
            current = id;
            renderCurrentVideo(videos[current].id);
        })
    })
}

