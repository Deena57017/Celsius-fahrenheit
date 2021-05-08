function toCelsius(fahrenheit)
{
    
    let value = (fahrenheit-32)*5/9
       console.log(value)
    return value.toFixed(2);
}
function display(elementId,value){
    document.getElementById(elementId).innerHTML ="<b>" + value+"</b>"
}
function toFahrenheit(celsius){
    let value = (celsius*9)/5+32
    return value.toFixed(2);
}
function toCelsiusProgram(value){
    alert(toCelsius(value))
}
function toFahrenheitProgram(value){
    alert(toFahrenheit(value))
}
