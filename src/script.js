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
var rowInputStatus = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('#sel-status');
var rowInputName = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('#input-name');
var tableBody = document.getElementById('table-body');
//NEW ROW ADD BUTTON
var rowAddBtn = rowInput === null || rowInput === void 0 ? void 0 : rowInput.querySelector('.add-btn');
// TEST TO CHECK INPUTS IF WORK WELL
// const show = () => {    
//     console.log(rowInputLine.value.replace(/-/g, " "))
//     console.log(rowInputElement.value)
//     console.log(rowInputDescription.value)
//     console.log(rowInputDate.value)
//     console.log(rowInputName.value)
// }
// rowAddBtn?.addEventListener('click', show);
// CLASS TO MAKE NEW ROW ON TABLE
var Row = /** @class */ (function () {
    function Row(count, line, element, descript, date, stat, addby) {
        this.count = count;
        this.line = line;
        this.element = element;
        this.descript = descript;
        this.date = date;
        this.stat = stat;
        this.addby = addby;
    }
    return Row;
}());
//VARIABLE ARRAY TO PUSH ROW DATA 
var rowTab = [];
// HARDCODE EXAMPLE DATA TO SHOW ON PAGE HOW IT LOOKS AFTER ADDING TO TABLE
var exampleRow = new Row(1, 'Line A', 'Motor', 'Strange sound during startup', '2023-06-08', 'informed', 'Kamil');
rowTab.push(exampleRow);
// CHECK NUMBERS OF ROW AND RETURN NUMBER FOR NEW ROW
function rowCounter() {
    var num = rowTab.length;
    return num + 1;
}
rowAddBtn === null || rowAddBtn === void 0 ? void 0 : rowAddBtn.addEventListener('click', getDataRow);
function getDataRow(a) {
    a = new Row(rowCounter(), rowInputLine.value.replace(/-/g, " "), rowInputElement.value, rowInputDescription.value, rowInputDate.value, rowInputStatus.value, rowInputName.value);
    rowTab.push(a);
    console.log(rowTab);
    renderData();
}
// RENDER ROW DATA IN DOM
function renderData() {
    var data = document.createElement('tr');
    for (var _i = 0, rowTab_1 = rowTab; _i < rowTab_1.length; _i++) {
        var row = rowTab_1[_i];
        data.innerHTML =
            "\n            <td>".concat(row.count, "</td>\n            <td>").concat(row.line, "</td>\n            <td>").concat(row.element, "</td>\n            <td>").concat(row.descript, "</td>\n            <td>").concat(row.date, "</td>\n            <td><p class=\"").concat(row.stat, "\">").concat(row.stat, "</p></td>\n            <td>").concat(row.addby, "</td>\n            <td><button class=\"edit-btn\">Edit</button></td>\n            <td><button class=\"del-btn\" onClick=\"deleteRow(").concat(row.count, ")\">Del</button></td>\n            ");
        tableBody.append(data);
        // tableBody.prepend(data);
        // ADD ROW DATA AT BEGINNING
        // NEXT ROW DATA ADD BEFORE INPUTS ROW
        if (rowCounter() === 2) {
            tableBody.insertBefore(data, tableBody.children[0]);
        }
        else {
            // COUNTER '-2' BECAUSE ROW COUNTER IS INCREMENT TO COUNT WELL
            tableBody.insertBefore(data, tableBody.children[rowCounter() - 2]);
        }
        clearInputs();
    }
}
renderData();
// CLEAR ALL INPUTS AFTER ADD ROW
function clearInputs() {
    var resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', function () {
        rowInputLine.value = "";
        rowInputElement.value = "";
        rowInputDescription.value = "";
        rowInputDate.value = "";
        rowInputStatus.value = "";
        rowInputName.value = "";
    });
}
function deleteRow(index) {
    console.log("Row ".concat(index, " deleted"));
}
