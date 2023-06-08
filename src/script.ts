
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
const rowInputStatus = rowInput?.querySelector('#sel-status') as HTMLSelectElement;
const rowInputName = rowInput?.querySelector('#input-name') as HTMLSelectElement;
const tableBody = document.getElementById('table-body') as HTMLSelectElement;

//NEW ROW ADD BUTTON
const rowAddBtn = rowInput?.querySelector('.add-btn');


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
class Row {
    count: number;
    line: string;
    element: string;
    descript: string;
    date: string;
    stat: string;
    addby: string;

    constructor(
        count: number,
        line: string,
        element: string,
        descript: string,
        date: string,
        stat: string,
        addby: string,
        ) {
            this.count = count;
            this.line = line;
            this.element = element;
            this.descript = descript;
            this.date = date;
            this.stat = stat;
            this.addby = addby;
        }
}


//VARIABLE ARRAY TO PUSH ROW DATA 
let rowTab: any[] = [];

// HARDCODE EXAMPLE DATA TO SHOW ON PAGE HOW IT LOOKS AFTER ADDING TO TABLE

let exampleRow = new Row (
    1,
    'Line A',
    'Motor',
    'Strange sound during startup',
    '2023-06-08',
    'informed',
    'Kamil',
)
rowTab.push(exampleRow);

// CHECK NUMBERS OF ROW AND RETURN NUMBER FOR NEW ROW
function rowCounter() {
    let num:number = rowTab.length;
    return num+1;
}


rowAddBtn?.addEventListener('click', getDataRow);


function getDataRow(a: object) {
    a = new Row(
        rowCounter(),
        rowInputLine.value.replace(/-/g, " "),
        rowInputElement.value,
        rowInputDescription.value,
        rowInputDate.value,
        rowInputStatus.value,
        rowInputName.value,
        )
    rowTab.push(a);
    console.log(rowTab);
    renderData();
}

// RENDER ROW DATA IN DOM
function renderData() {
    const data = document.createElement('tr');

    for (const row of rowTab) {
        data.innerHTML = 
            `
            <td>${row.count}</td>
            <td>${row.line}</td>
            <td>${row.element}</td>
            <td>${row.descript}</td>
            <td>${row.date}</td>
            <td><p class="${row.stat}">${row.stat}</p></td>
            <td>${row.addby}</td>
            <td><button class="edit-btn">Edit</button></td>
            <td><button class="del-btn" onClick="deleteRow(${row.count})">Del</button></td>
            `;
        tableBody.append(data)
        // tableBody.prepend(data);
        

        // ADD ROW DATA AT BEGINNING
        // NEXT ROW DATA ADD BEFORE INPUTS ROW

        if (rowCounter()===2) {
            tableBody.insertBefore(data, tableBody.children[0]);
        } else {
            // COUNTER '-2' BECAUSE ROW COUNTER IS INCREMENT TO COUNT WELL
            tableBody.insertBefore(data, tableBody.children[rowCounter()-2]);
        }


        clearInputs()
        }
    }

renderData();


// CLEAR ALL INPUTS AFTER ADD ROW
function clearInputs() {
    
    const resetBtn = document.querySelector('.reset-btn') as HTMLSelectElement;
    resetBtn.addEventListener('click', ()=> {
        rowInputLine.value = "";
        rowInputElement.value = "";
        rowInputDescription.value = "";
        rowInputDate.value = "";
        rowInputStatus.value = "";
        rowInputName.value = "";
        })
}

function deleteRow(index: number) {
    console.log(`Row ${index} deleted`)

}
