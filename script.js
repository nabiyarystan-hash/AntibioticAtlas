const antibiotics = {

"Amoxicillin": {
    embed: "https://datawrapper.dwcdn.net/nOEBN/1/",
    table: "https://datawrapper.dwcdn.net/alMlC/1/",
    open: "https://www.datawrapper.de/_/nOEBN/"
},

"Amoxicillin and beta-lactamase inhibitor": {
    embed: "https://datawrapper.dwcdn.net/CKOD3/2/",
    table: "",
    open: "https://www.datawrapper.de/_/CKOD3/"
},

"Ampicillin": {
    embed: "https://datawrapper.dwcdn.net/rUGid/1/",
    table: "",
    open: "https://www.datawrapper.de/_/rUGid/"
},

"Azithromycin": {
    embed: "https://datawrapper.dwcdn.net/T32JE/1/",
    table: "",
    open: "https://www.datawrapper.de/_/T32JE/"
},

"Cefazolin": {
    embed: "https://datawrapper.dwcdn.net/UnOdQ/1/",
    table: "",
    open: "https://www.datawrapper.de/_/UnOdQ/"
},

"Ceftriaxone": {
    embed: "https://datawrapper.dwcdn.net/mJj0R/1/",
    table: "",
    open: "https://www.datawrapper.de/_/mJj0R/"
},

"Ciprofloxacin": {
    embed: "https://datawrapper.dwcdn.net/lr3n4/1/",
    table: "",
    open: "https://www.datawrapper.de/_/lr3n4/"
},

"Doxycycline": {
    embed: "https://datawrapper.dwcdn.net/cY8KE/1/",
    table: "",
    open: "https://www.datawrapper.de/_/cY8KE/"
},

"Gentamicin": {
    embed: "https://datawrapper.dwcdn.net/diOxh/1/",
    table: "",
    open: "https://www.datawrapper.de/_/diOxh/"
},

"Levofloxacin": {
    embed: "https://datawrapper.dwcdn.net/ElE97/1/",
    table: "",
    open: "https://www.datawrapper.de/_/ElE97/"
}

};


const list = document.getElementById("drugList");
const frame = document.getElementById("atlas");
const tableFrame = document.getElementById("table");
const title = document.getElementById("selectedDrug");
const openButton = document.getElementById("openDW");
const search = document.getElementById("search");


function populateList(filter = "") {

    list.innerHTML = "";

    Object.keys(antibiotics)
        .sort()
        .filter(name => name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(name => {

            const option = document.createElement("option");

            option.value = name;
            option.textContent = name;

            list.appendChild(option);

        });

}


function loadSelected() {

    const drug = list.value;

    if (!drug) return;

    frame.src = antibiotics[drug].embed;

    tableFrame.src = antibiotics[drug].table;

    title.textContent = drug;

    openButton.href = antibiotics[drug].open;

}


populateList();

list.selectedIndex = 0;

loadSelected();


list.addEventListener("change", loadSelected);


search.addEventListener("input", function () {

    populateList(this.value);

    list.selectedIndex = 0;

    loadSelected();

});