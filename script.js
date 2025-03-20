function bgcolor() {
    let bginput = document.querySelector('#bgcolor');
    let input1 = document.querySelector('#selector').value;
    let selectelements = document.querySelectorAll(input1);
    console.log(input1);
    console.log(bginput.value);

    if (selectelements.length > 0) {
        selectelements.forEach((element) => {
            element.style.backgroundColor = bginput.value;
        });
    } else {
        alert(`${input1} not found`);
    }
}

function fontcolor() {
    let colorinput = document.querySelector('#fontcolor');
    let input1 = document.querySelector('#selector').value;
    let selectelements = document.querySelectorAll(input1);
    console.log(input1);
    console.log(colorinput.value);

    if (selectelements.length > 0) {
        selectelements.forEach((element) => {
            element.style.color = colorinput.value;
        });
    } else {
        alert(`${input1} not found`);
    }
}

function textreplace() {
    let textinput = document.querySelector('#textreplace');
    let input1 = document.querySelector('#selector').value;
    let selectelements = document.querySelectorAll(input1);
    console.log(input1);
    console.log(textinput.value);

    if (selectelements.length > 0) {
        selectelements.forEach((element) => {
            element.innerText = textinput.value;
        });
    } else {
        alert(`${input1} not found`);
    }
}

function elementreplace() {
    let elementinput = document.querySelector('#elementreplace');
    let input1 = document.querySelector('#selector').value;
    let selectelements = document.querySelectorAll(input1);
    console.log(input1);
    console.log(elementinput.value);

    if (selectelements.length > 0) {
        selectelements.forEach((element) => {
            element.innerHTML = elementinput.value;
        });
    } else {
        alert(`${input1} not found`);
    }
}
