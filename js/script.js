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

// MILESTONE 2
const colorsList = [
    { animal: "blue" },
    { vegetable: "orange" },
    { people: "purple" },
]

// riprova in es6
let iconsWithColorsList = [];

for(let i = 0; i < iconsList.length; i++) {
    for(let l = 0; l < colorsList.length; l++) {
        if(iconsList[i].type, colorsList[l][iconsList[i].type]) {
            iconsWithColorsList.push({ ...iconsList[i], color: colorsList[l][iconsList[i].type] })
        }
    }
}
// /riprova in es6

iconsContainer.innerHTML = "";

iconsWithColorsList.forEach(el => {
    const {name, prefix, family, color} = el;

    let icon = `
        <div class="icon-container">
            <i class="${family} ${prefix}${name}" style="color: ${color};"></i> <br/>
            <span>${name}</span>
        </div>`
    
    iconsContainer.innerHTML += icon;
});

// MILESTONE 3
let selectContent = '<option value="all">All</option>';

colorsList.forEach(el => {
    selectContent += `<option value="${Object.keys(el)[0]}">${Object.keys(el)[0]}</option>`;
    console.log(selectContent)
})

$("select#icons").html(selectContent);