// MILESTONE 1
const iconsList = [
    {
        name: "cat",
        prefix: "fa-",
        type: "animal",
        family: "fas",
    },
    {
        name: "crow",
        prefix: "fa-",
        type: "animal",
        family: "fas",
    },
    {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
    },
    {
        name: "user-astronaut",
        prefix: "fa-",
        type: "people",
        family: "fas",
    },
];

const iconsContainer = document.querySelector(".icons-container");

iconsList.forEach(el => {
    const {name, prefix, family} = el;

    let icon = `
        <div class="icon-container">
            <i class="${family} ${prefix}${name}"></i> <br/>
            <span>${name}</span>
        </div>`
    
    iconsContainer.innerHTML += icon;
});


