function bgcolor() {
    let bginput = document.querySelector('#bgcolor');
    let input1 = document.querySelector('#selector').value.trim();
    let selectelements;

    // Determine if input is a class or a tag name
    if (input1.startsWith('.')) {
        selectelements = document.querySelectorAll(input1);
    } else if (/^[a-zA-Z]+$/.test(input1)) {
        selectelements = document.querySelectorAll(input1);
    } else {
        alert(`${input1} is not a valid class or tag name`);
        return;
    }

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
    let input1 = document.querySelector('#selector').value.trim();
    let selectelements;

    // Determine if input is a class or a tag name
    if (input1.startsWith('.')) {
        selectelements = document.querySelectorAll(input1);
    } else if (/^[a-zA-Z]+$/.test(input1)) {
        selectelements = document.querySelectorAll(input1);
    } else {
        alert(`${input1} is not a valid class or tag name`);
        return;
    }

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
    let input1 = document.querySelector('#selector').value.trim();
    let selectelements;

    // Determine if input is a class or a tag name
    if (input1.startsWith('.')) {
        selectelements = document.querySelectorAll(input1);
    } else if (/^[a-zA-Z]+$/.test(input1)) {
        selectelements = document.querySelectorAll(input1);
    } else {
        alert(`${input1} is not a valid class or tag name`);
        return;
    }

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
    let input1 = document.querySelector('#selector').value.trim();
    let selectelements;

    // Determine if input is a class or a tag name
    if (input1.startsWith('.')) {
        selectelements = document.querySelectorAll(input1);
    } else if (/^[a-zA-Z]+$/.test(input1)) {
        selectelements = document.querySelectorAll(input1);
    } else {
        alert(`${input1} is not a valid class or tag name`);
        return;
    }

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
