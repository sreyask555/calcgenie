// CalcEngine

//Default Values
const default_value = ""
document.getElementById('calc-disp').innerHTML = '5'

// Math Operands


// Math Calculation
showMath = (id_value) => {
    document.getElementById('calc-disp').innerHTML += document.getElementById(id_value)
}

doMath = () => {
    let math_expression = document.getElementById('calc-disp').value;
    let calc_value = math_expression
    console.log(calc_value)
}