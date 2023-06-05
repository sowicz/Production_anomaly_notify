
// BUTTONS SECTION QUERY SELECTOR
const operatorBtn = document.querySelector('.operator');
const maintenanceBtn = document.querySelector('.maintenance');
const managerBtn = document.querySelector('.manager');

// ACTIVATE CLICKED BUTTON 
// DEFAULT ACTIVE OPERATOR BUTTON (BY DEFAULT CLASS IN HTML)
const btns = document.querySelectorAll('.btn');

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


//DECLARE VARIABLES FOR NEW ROW INPUTS

//MAIN TABLE
const rowInput = document.querySelector('.tr-input');
//VARIABLES FOR REST INPUTS
const rowInputLine = rowInput?.querySelector('#sel-line') as HTMLSelectElement;
const rowInputElement = rowInput?.querySelector('#line-element') as HTMLSelectElement;
const rowInputDescription = rowInput?.querySelector('#description') as HTMLSelectElement;
const rowInputDate = rowInput?.querySelector('#input-date') as HTMLSelectElement;
const rowInputName = rowInput?.querySelector('#input-name') as HTMLSelectElement;

//NEW ROW ADD BUTTON
const rowAddBtn = rowInput?.querySelector('.add-btn');


const show = () => {    
    console.log(rowInputLine.value.replace(/-/g, " "))
    console.log(rowInputElement.value)
    console.log(rowInputDescription.value)
    console.log(rowInputDate.value)
    console.log(rowInputName.value)
}
rowAddBtn?.addEventListener('click', show);