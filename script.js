function bgcolor() {
    let bginput=document.querySelector('#bgcolor')
    let input1=document.querySelector('#selector').value
    let selectelement=document.querySelector(input1)
    console.log(input1)
    console.log(bginput.value);
    if (selectelement)
    {
        selectelement.style.backgroundColor=bginput.value;
    }
    else
    {
        alert(`${input1} not found`)
    }
}
function fontcolor() {
    let colorinput=document.querySelector('#fontcolor')
    let input1=document.querySelector('#selector').value
    let selectelement=document.querySelector(input1)
    console.log(input1)
    console.log(colorinput.value)
    if (selectelement)
        {
            selectelement.style.color=colorinput.value;
        }
        else
        {
            alert(`${input1} not found`)
        }
}
function textreplace() {
    let textinput=document.querySelector('#textreplace')
    let input1=document.querySelector('#selector').value
    let selectelement=document.querySelector(input1)
    console.log(input1)
    console.log(textinput.value)
    if (selectelement)
        {
            selectelement.innerText=textinput.value;
        }
        else
        {
            alert(`${input1} not found`)
        }
}
function elementreplace() {
    let elementinput=document.querySelector('#elementreplace')
    let input1=document.querySelector('#selector').value
    let selectelement=document.querySelector(input1)
    console.log(input1)
    console.log(elementinput.value)
    if (selectelement)
        {
            selectelement.innerHTML=elementinput.value;
        }
        else
        {
            alert(`${input1} not found`)
        }
}