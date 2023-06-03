
const operatorBtn = document.querySelector('.operator');
const maintenanceBtn = document.querySelector('.maintenance');
const managerBtn = document.querySelector('.manager');

const btns = document.querySelectorAll('.btn');
console.log(btns);
btns.forEach(button => {
    button.addEventListener('click', () => {

        operatorBtn?.classList.remove('activeBtn')
        maintenanceBtn?.classList.remove('activeBtn')
        managerBtn?.classList.remove('activeBtn')


        if (button.classList.contains('activeBtn')) {
           button.classList.remove('activeBtn') 
        }
        else {
            button.classList.add('activeBtn') 
        }
    })
})
