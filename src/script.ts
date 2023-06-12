
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
// num AS GLOBAL VARIABLE BECAUSE WE WANT TO KNOW NUMBERS OF NITICES IN TABLE

// let num:number = rowTab.length+1;
// function rowCounter() {
    
//         for (const el in rowTab)
//             if(num == rowTab[el].count){
//                 num++;
//             }
//     return num;
// }


rowAddBtn?.addEventListener('click', getDataRow);


function getDataRow(a: object) {
    a = new Row(
        // rowCounter(),
        num,
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

// NUM AS GLOBAL VARIABLE TO TRACK NUMBERS OF NOTICIES IN TABLE
let num:number = rowTab.length;

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
        data.setAttribute('id', `tr-${row.count}`)
        tableBody.append(data)
        // tableBody.prepend(data);
        

        // ADD ROW DATA AT BEGINNING
        // NEXT ROW DATA ADD BEFORE INPUTS ROW

        if (num==1) {
            tableBody.insertBefore(data, tableBody.children[0]);
        } else {
            //GET .tr-input CLASS TO INSERT DATE BEFORE OUR INPUT IN TABLE
            let trInpt = document.querySelector('.tr-input')
            tableBody.insertBefore(data, trInpt);
        }

        clearInputs()
    }
    num++;
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
    //CHECK IF tab COUNT HAS VALUE "INDEX"
    //GET FROM DOM TABLE ROW WITH PROPER ID (==INDEX)
    //REMOVE THIS ROW
    for(const el in rowTab) {
        if(index == rowTab[el].count){
            console.log(`Row ${index} deleted`)
            const rowToRemove = document.getElementById(`tr-${index}`)
            rowToRemove?.remove();

            //DELETE FROM rowTab ACTUAL ELEMENT AND CHANGE ARRAY 
            // TO NOT HAVE UNDEFINED VALUE IN ARRAY 
            delete rowTab[el];
            const a = rowTab.filter(item => item !== undefined)
            rowTab = a;
            console.log(rowTab)
        } 
    }
}
