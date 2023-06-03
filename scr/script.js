var operatorBtn = document.querySelector('.operator');
var maintenanceBtn = document.querySelector('.maintenance');
var managerBtn = document.querySelector('.manager');
var btns = document.querySelectorAll('.btn');
console.log(btns);
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
