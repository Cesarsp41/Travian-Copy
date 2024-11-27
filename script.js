// Materias primas 
let wood = 100;
let clay = 100;
let iron = 100;
let cereal = 100;

// Produccion por hora
let woodHour = 10;
let clayHour = 10;
let ironHour = 10;
let cerealHour = 10;

// Niveles de almacen y granero
let warehouseLevel = 1;
let barnLevel = 1;

// Casillas de recuersos
let woodFields = [0, 0, 0, 0];
let clayFields = [0, 0, 0, 0];
let ironFields = [0, 0, 0, 0];
let cerealFields = [0, 0, 0, 0, 0];

// Precios de casillas
const resourcesPrices = [];


const woodPrices = [
    {level: 1, wood: 40, clay: 100, iron: 50, cereal: 60},
    {level: 2, wood: 65, clay: 165, iron: 85, cereal: 100},
    {level: 3, wood: 110, clay: 280, iron: 140, cereal: 165},
    {level: 4, wood: 185, clay: 465, iron: 235, cereal: 280},
    {level: 5, wood: 310, clay: 780, iron: 390, cereal: 465},
    {level: 6, wood: 520, clay: 1300, iron: 650, cereal: 780},
    {level: 7, wood: 870, clay: 2170, iron: 1085, cereal: 1300},
    {level: 8, wood: 1450, clay: 3625, iron: 1810, cereal: 2175},
    {level: 9, wood: 2420, clay: 6050, iron: 3025, cereal: 3630},
    {level: 10, wood: 4040, clay: 10105, iron: 5050, cereal: 6060}];

const clayPrices = [
    {level: 1,wood: 80,clay: 40,iron: 80,cereal: 50},
    {level: 2,wood: 135,clay: 65,iron: 135,cereal: 85},
    {level: 3,wood: 225,clay: 110,iron: 225,cereal: 140},
    {level: 4,wood: 375,clay: 185,iron: 375,cereal: 235},
    {level: 5,wood: 620,clay: 310,iron: 620,cereal: 390},
    {level: 6,wood: 1040,clay: 520,iron: 1040,cereal: 650},
    {level: 7,wood: 1735,clay: 870,iron: 1735,cereal: 1085},
    {level: 8,wood: 2900,clay: 1450,iron: 2900,cereal: 1810},
    {level: 9,wood: 4840,clay: 2420,iron: 4840,cereal: 3025},
    {level: 10,wood: 8080,clay: 4040,iron: 8080,cereal: 5050}];

const ironPrices = [
    {level: 1,wood: 100,clay: 80,iron: 30,cereal: 60},
    {level: 2,wood: 165,clay: 135,iron: 50,cereal: 100},
    {level: 3,wood: 280,clay: 225,iron: 85,cereal: 165},
    {level: 4,wood: 465,clay: 375,iron: 140,cereal: 280},
    {level: 5,wood: 780,clay: 620,iron: 235,cereal: 465},
    {level: 6,wood: 1300,clay: 1040,iron: 390,cereal: 780},
    {level: 7,wood: 2170,clay: 1735,iron: 650,cereal: 1300},
    {level: 8,wood: 3625,clay: 2900,iron: 1085,cereal: 2175},
    {level: 9,wood: 6050,clay: 4840,iron: 1815,cereal: 3630},
    {level: 10,wood: 10105,clay: 8080,iron: 3030,cereal: 6060}];

const cerealPrices = [
    {level: 1,wood: 70,clay: 90,iron: 70,cereal: 20},
    {level: 2,wood: 115,clay: 150,iron: 115,cereal: 35},
    {level: 3,wood: 195,clay: 250,iron: 195,cereal: 55},
    {level: 4,wood: 325,clay: 420,iron: 325,cereal: 95},
    {level: 5,wood: 545,clay: 700,iron: 545,cereal: 155},
    {level: 6,wood: 910,clay: 1170,iron: 910,cereal: 260},
    {level: 7,wood: 1520,clay: 1950,iron: 1520,cereal: 435},
    {level: 8,wood: 2535,clay: 3260,iron: 2535,cereal: 725},
    {level: 9,wood: 4235,clay: 5445,iron: 4235,cereal: 1210},
    {level: 10,wood: 7070,clay: 9095,iron: 7070,cereal: 2020}];

const warehousePrices = [
    {level: 1,size: 1200,wood: 130,clay: 160,iron: 90,cereal: 40},
    {level: 2,size: 1700,wood: 165,clay: 205,iron: 115,cereal: 50},
    {level: 3,size: 2300,wood: 210,clay: 260,iron: 145,cereal: 65},
    {level: 4,size: 3100,wood: 275,clay: 335,iron: 190,cereal: 85},
    {level: 5,size: 4000,wood: 350,clay: 430,iron: 240,cereal: 105},
    {level: 6,size: 5000,wood: 445,clay: 550,iron: 310,cereal: 135},
    {level: 7,size: 6300,wood: 570,clay: 705,iron: 395,cereal: 175},
    {level: 8,size: 7800,wood: 730,clay: 900,iron: 505,cereal: 225},
    {level: 9,size: 9600,wood: 935,clay: 1155,iron: 650,cereal: 290},
    {level: 10,size: 11800,wood: 1200,clay: 1475,iron: 830,cereal: 370}];

const barnPrices = [
    {level: 1,size: 1200,wood: 80,clay: 100,iron: 70,cereal: 20},
    {level: 2,size: 1700,wood: 100,clay: 130,iron: 90,cereal: 25},
    {level: 3,size: 2300,wood: 130,clay: 165,iron: 115,cereal: 35},
    {level: 4,size: 3100,wood: 170,clay: 210,iron: 145,cereal: 40},
    {level: 5,size: 4000,wood: 215,clay: 270,iron: 190,cereal: 55},
    {level: 6,size: 5000,wood: 275,clay: 345,iron: 240,cereal: 70},
    {level: 7,size: 6300,wood: 350,clay: 440,iron: 310,cereal: 90},
    {level: 8,size: 7800,wood: 450,clay: 565,iron: 395,cereal: 115},
    {level: 9,size: 9600,wood: 575,clay: 720,iron: 505,cereal: 145},
    {level: 10,size: 11800,wood: 740,clay: 920,iron: 645,cereal: 185}];

// Production increases
const productionIncreases = [7, 13, 21, 31, 46, 70, 98, 140, 203, 280];

// Inicializar elementos modificables
const woodText = document.getElementById("woodText");
const clayText = document.getElementById("clayText");
const ironText = document.getElementById("ironText");
const cerealText = document.getElementById("cerealText");
const information = document.querySelector(".info-container");

// Botones
const woodButton1 = document.getElementById("wood-button-1");
const woodButton2 = document.getElementById("wood-button-2");
const woodButton3 = document.getElementById("wood-button-3");
const woodButton4 = document.getElementById("wood-button-4");

const clayButton1 = document.getElementById("clay-button-1");
const clayButton2 = document.getElementById("clay-button-2");
const clayButton3 = document.getElementById("clay-button-3");
const clayButton4 = document.getElementById("clay-button-4");

const ironButton1 = document.getElementById("iron-button-1");
const ironButton2 = document.getElementById("iron-button-1");
const ironButton3 = document.getElementById("iron-button-1");
const ironButton4 = document.getElementById("iron-button-1");

const cerealButton1 = document.getElementById("cereal-button-1");
const cerealButton2 = document.getElementById("cereal-button-2");
const cerealButton3 = document.getElementById("cereal-button-3");
const cerealButton4 = document.getElementById("cereal-button-4");
const cerealButton5 = document.getElementById("cereal-button-5");

const woodHourText = document.getElementById("wood-hour-text");
const clayHourText = document.getElementById("clay-hour-text");
const ironHourText = document.getElementById("iron-hour-text");
const cerealHourText = document.getElementById("cereal-hour-text");

const warehouseButton = document.getElementById("warehouse-button");
const barnButton = document.getElementById("barn-button");

const wareHouseText = document.querySelector(".warehouseText");
const barnText = document.querySelector(".barnText");

const produceButton = document.getElementById("production-button");

let currentwarehouseIndex = 0;
let currentBarnIndex = 0;

// Function
function produce(){
    // Calculations needed
    let wSize = warehousePrices[currentwarehouseIndex].size;
    let bSize = barnPrices[currentBarnIndex].size;

    let availableWood = wSize - wood;
    let availableClay = wSize - clay;
    let availableIron = wSize - iron;
    let availableCereal = bSize - cereal;

    //Asign warehouse and barn
    wood = (woodHour <= availableWood) ? wood + woodHour : wSize;
    clay = (clayHour <= availableClay) ? clay + clayHour : wSize;
    iron = (ironHour <= availableIron) ? iron + ironHour : wSize;
    cereal = (woodHour <= availableCereal) ? cereal + cerealHour : bSize;

    //Update text
    woodText.innerText = wood;
    clayText.innerText = clay;
    ironText.innerText = iron;
    cerealText.innerText = cereal;
    information.style.display = "none";
}
produceButton.onclick = produce;

// Helper function
function priceCheck(woodC, clayC, ironC, cerealC){
    let value = true;
    if (woodC > wood || clayC > clay || ironC > iron || cerealC > cereal){
        value = false;
    }
    return value;
}

function warehouseUpgrade(){
    let w = warehousePrices[currentwarehouseIndex].wood;
    let c = warehousePrices[currentwarehouseIndex].clay;
    let i = warehousePrices[currentwarehouseIndex].iron;
    let ce = warehousePrices[currentwarehouseIndex].cereal;

    if (priceCheck(w, c, i, ce)){
        // Comprar y aumentar index
        wood -= w;
        clay -= c;
        iron -= i;
        cereal -= ce;
        currentwarehouseIndex++;

        // Mostrar texto de compra
        information.innerText = "Compraste mas almacenamiento. Capacidad: " + warehousePrices[currentwarehouseIndex].size;
        information.style.display = "flex";
    }
    else
    {
        information.innerText = "No tienes los suficientes recursos";
        information.style.display = "flex";
    }

    woodText.innerText = wood;
    clayText.innerText = clay;
    ironText.innerText = iron;
    cerealText.innerText = cereal;
    wareHouseText.innerText = currentwarehouseIndex + 1;
}
warehouseButton.onclick = warehouseUpgrade;

// WOOD Handling
function upgradeWood(index){
    if (woodFields[index] == 10){
        information.innerText = "Leñador a nivel máximo, no se puede ampliar más.";
        information.style.display = "flex";
    }
    else{
        // Cambiar boton
        // Cambiar produccion hora
        let w = woodPrices[woodFields[index]].wood;
        let c = woodPrices[woodFields[index]].clay;
        let i = woodPrices[woodFields[index]].iron;
        let ce = woodPrices[woodFields[index]].cereal;
        if (priceCheck(w, c, i, ce)){
            
            // Confirmation text
            information.innerText = "Aumentaste un leñador";
            information.style.display = "flex";
            
            // Update resources and production
            wood -= w;
            clay -= c;
            iron -= i;
            cereal -= ce;
            woodHour += productionIncreases[woodFields[index]];

            // Update field information
            woodFields[index]++;

            // Update texts
            woodText.innerText = wood;
            clayText.innerText = clay;
            ironText.innerText = iron;
            cerealText.innerText = cereal;
            woodHourText.innerText = woodHour;
        }
        else{
            // NO SE PUEDE, NO HAY MONEY
            information.innerText = "No tienes los suficientes recursos";
            information.style.display = "flex";
        }
    }
}

function upgradeWood1(){
    upgradeWood(0);
    woodButton1.innerText = woodFields[0];
}
function upgradeWood2(){
    upgradeWood(1);
    woodButton2.innerText = woodFields[1];
}
function upgradeWood3(){
    upgradeWood(2);
    woodButton3.innerText = woodFields[2];
}
function upgradeWood4(){
    upgradeWood(3);
    woodButton4.innerText = woodFields[3];
}

woodButton1.onclick = upgradeWood1;
woodButton2.onclick = upgradeWood2;
woodButton3.onclick = upgradeWood3;
woodButton4.onclick = upgradeWood4;