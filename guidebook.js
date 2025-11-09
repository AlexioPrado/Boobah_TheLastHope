
// Buttons
let boobah = document.getElementById('boobahCardGame');
let gameFlow = document.getElementById('gameFlow');
let takingAction = document.getElementById('takingAction');
let characterRoles = document.getElementById('characterRoles');
let damageTypes = document.getElementById('damageTypes');
let attributes = document.getElementById('attributes');
let otherRules = document.getElementById('otherRules');

//Titles of the Guidebook
let boobahTitle = document.getElementById('info1');
let gameFlowTitle = document.getElementById('info2');
let takingActionTitle = document.getElementById('info3');
let characterRolesTitle = document.getElementById('info4');
let damageTypesTitle = document.getElementById('info5');
let attributesTitle = document.getElementById('info6');
let otherRulesTitle = document.getElementById('info7');


boobah.onclick = function (){
    console.log('General Game Section');
    boobahTitle.scrollIntoView({behavior: "smooth", block: "center"});
}
gameFlow.onclick = function (){
    console.log('Game Flow Section');
    gameFlowTitle.scrollIntoView({behavior: "smooth", block: "center"});
}
takingAction.onclick = function (){
    console.log('Taking Action Section');
    takingActionTitle.scrollIntoView({behavior: "smooth", block: "center"});
}
characterRoles.onclick = function (){
    console.log('Character Roles Section');
    characterRolesTitle.scrollIntoView({behavior: "smooth", block: "center"});
}
damageTypes.onclick = function (){
    console.log('Damage Type Section');
    damageTypesTitle.scrollIntoView({behavior: "smooth", block: "center"});
}
attributes.onclick = function (){
    console.log('Attributes Section');
    attributesTitle.scrollIntoView({behavior: "smooth", block: "center"});
}
otherRules.onclick = function (){
    console.log('Other Rules Section');
    otherRulesTitle.scrollIntoView({behavior: "smooth", block: "center"});
}


/* Linking pages
let exit = document.getElementById('exit');

exit.onclick = function (){
    window.open("https://alexioprado.github.io/Boobah_TheLastHope/");
}
*/