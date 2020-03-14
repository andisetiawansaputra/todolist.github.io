const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        //create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type - "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        //untuk membuat edit list
        let editSpan = document.createElement('span');
        let editIcon = document.createElement('i');
        editIcon.className = "fa fa-pencil";
        editSpan.className = "edit";
        editSpan.appendChild(editIcon);

        //untuk membuat remove/menghapus list
        let removeSpan = document.createElement('span');
        let removeIcon = document.createElement('i');
        removeIcon.className = "fa fa-trash-o";
        removeSpan.className = "remove";
        removeSpan.appendChild(removeIcon);

        //untuk membuat memberikan tanda centang
        let checklistSpan = document.createElement('span');
        let checklistIcon = document.createElement('i');
        checklistIcon.className = "fa fa-check-square-o";
        checklistSpan.className = "checklist";
        checklistSpan.appendChild(checklistIcon);


        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editSpan);
        itemBox.appendChild(removeSpan);
        itemBox.appendChild(checklistSpan);

        //untuk dapat menekan edit, remove dan checklist
        editSpan.addEventListener('click', () => this.edit(input));
        removeSpan.addEventListener('click', () => this.remove(itemBox));
        checklistSpan.addEventListener('click', () => this.test(input));
    }

    //fungsi edit
    edit(input) {
        input.disabled = !input.disabled;
    }

    //FUNGSI REMOVE
    remove(item) {
        container.removeChild(item);
    }

    //fungsi untuk mencoret list
    test(input) {
        input.classList.toggle('checked');
    }

}

function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})