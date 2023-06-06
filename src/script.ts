
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
const show = () => {    
    console.log(rowInputLine.value.replace(/-/g, " "))
    console.log(rowInputElement.value)
    console.log(rowInputDescription.value)
    console.log(rowInputDate.value)
    console.log(rowInputName.value)
}
// rowAddBtn?.addEventListener('click', show);



// CLASS TO MAKE NEW ROW ON TABLE
class Row {
    count: number;
    line: string;
    element: string;
    descript: string;
    date: string;
    status: string;
    addby: string;

    constructor(
        count: number,
        line: string,
        element: string,
        descript: string,
        date: string,
        status: string,
        addby: string,
        ) {
            this.count = count;
            this.line = line;
            this.element = element;
            this.descript = descript;
            this.date = date;
            this.status = status;
            this.addby = addby;
        }
}

//ARRAY TO PUSH ROW DATA AS OBJ
let rowTab: any[] = [];

rowAddBtn?.addEventListener('click', getDataRow);

function getDataRow(a: object) {
    a = new Row(
        1,
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

function renderData() {
    const data = document.createElement('tr');
    data.innerHTML = 
        `
        <td>${rowTab[0].count}</td>
        <td>${rowTab[0].line}</td>
        <td>${rowTab[0].element}</td>
        <td>${rowTab[0].descript}</td>
        <td>${rowTab[0].date}</td>
        <td><p class="${rowTab[0].status}">${rowTab[0].status}</p></td>
        <td>${rowTab[0].addby}</td>
        <td><button class="edit-btn">Edit</button></td>
        <td><button class="del-btn">Del</button></td>
        `;
    tableBody.append(data)
    tableBody.insertBefore(data, tableBody.children[1]);
}
