// BUTTONS SECTION QUERY SELECTOR
var operatorBtn = document.querySelector('.operator');
var maintenanceBtn = document.querySelector('.maintenance');
var managerBtn = document.querySelector('.manager');
// ACTIVATE CLICKED BUTTON 
// DEFAULT ACTIVE OPERATOR BUTTON (BY DEFAULT CLASS IN HTML)
var btns = document.querySelectorAll('.btn');
btns.forEach(function (button) {
    button.addEventListener('click', function () {
        operatorBtn === null || operatorBtn === void 0 ? void 0 : operatorBtn.classList.remove('activeBtn');
        maintenanceBtn === null || maintenanceBtn === void 0 ? void 0 : maintenanceBtn.classList.remove('activeBtn');
        managerBtn === null || managerBtn === void 0 ? void 0 : managerBtn.classList.remove('activeBtn');
        if (button.classList.contains('activeBtn')) {
            button.classList.remove('activeBtn');
        }
        else {
            button.classList.add('activeBtn');
        }
    });
});
//DECLARE VARIABLES FOR NEW ROW INPUTS
//MAIN TABLE
var rowInput = document.querySelector('.tr-input');
//VARIABLES FOR REST INPUTS
var rowInputLine = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('#sel-line');
var rowInputElement = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('#line-element');
var rowInputDescription = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('#description');
var rowInputDate = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('#input-date');
var rowInputName = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('#input-name');
//NEW ROW ADD BUTTON
var rowAddBtn = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('.add-btn');
var show = function () {
    console.log(rowInputLine.value.replace(/-/g, " "));
    console.log(rowInputElement.value);
    console.log(rowInputDescription.value);
    console.log(rowInputDate.value);
    console.log(rowInputName.value);
};
rowAddBtn === null || rowAddBtn === void 0 ? void 0 : rowAddBtn.addEventListener('click', show);
