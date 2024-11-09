
window.onload = function() {
    loadUnitState('unit1');
    loadUnitState('unit2');
    loadUnitState('unit3');
    loadUnitState('unit4');
    loadUnitState('unit5');
    loadUnitState('unit6');
};


function saveUnitState(unit) {
    const checkboxes = document.querySelectorAll(`#${unit} input[type="checkbox"]`);
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem(`${unit}_item${index}`, checkbox.checked);
    });
}


function loadUnitState(unit) {
    const checkboxes = document.querySelectorAll(`#${unit} input[type="checkbox"]`);
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`${unit}_item${index}`);
        if (savedState !== null) {
            checkbox.checked = JSON.parse(savedState);
        }
    });
}


function saveUnit1() { saveUnitState('unit1'); }
function saveUnit2() { saveUnitState('unit2'); }
function saveUnit3() { saveUnitState('unit3'); }
function saveUnit4() { saveUnitState('unit4'); }
function saveUnit5() { saveUnitState('unit5'); }
function saveUnit6() { saveUnitState('unit6'); }

