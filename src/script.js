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
var show = function () {
    console.log(rowInputLine.value.replace(/-/g, " "));
    console.log(rowInputElement.value);
    console.log(rowInputDescription.value);
    console.log(rowInputDate.value);
    console.log(rowInputName.value);
};
// rowAddBtn?.addEventListener('click', show);
// CLASS TO MAKE NEW ROW ON TABLE
var Row = /** @class */ (function () {
    function Row(count, line, element, descript, date, status, addby) {
        this.count = count;
        this.line = line;
        this.element = element;
        this.descript = descript;
        this.date = date;
        this.status = status;
        this.addby = addby;
    }
    return Row;
}());
//ARRAY TO PUSH ROW DATA AS OBJ
var rowTab = [];
rowAddBtn === null || rowAddBtn === void 0 ? void 0 : rowAddBtn.addEventListener('click', getDataRow);
function getDataRow(a) {
    a = new Row(1, rowInputLine.value.replace(/-/g, " "), rowInputElement.value, rowInputDescription.value, rowInputDate.value, rowInputStatus.value, rowInputName.value);
    rowTab.push(a);
    console.log(rowTab);
    renderData();
}
function renderData() {
    var data = document.createElement('tr');
    data.innerHTML =
        "\n        <td>".concat(rowTab[0].count, "</td>\n        <td>").concat(rowTab[0].line, "</td>\n        <td>").concat(rowTab[0].element, "</td>\n        <td>").concat(rowTab[0].descript, "</td>\n        <td>").concat(rowTab[0].date, "</td>\n        <td><p class=\"").concat(rowTab[0].status, "\">").concat(rowTab[0].status, "</p></td>\n        <td>").concat(rowTab[0].addby, "</td>\n        <td><button class=\"edit-btn\">Edit</button></td>\n        <td><button class=\"del-btn\">Del</button></td>\n        ");
    tableBody.append(data);
    tableBody.insertBefore(data, tableBody.children[1]);
}
