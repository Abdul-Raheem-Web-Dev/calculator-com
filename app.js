// function to show input on screen
function screenInput(number)
{
    var output = document.getElementById("output");
    output.value += number;
}
// function to disable input screen
function disableInput()
{
    document.getElementById("output").disabled = true;
    output.value = "";
}
// function to enable input screen
function enableInput()
{
    document.getElementById("output").disabled = false;
    output.value = "";
}
// function to clear entire input screen
function clearInput()
{
    var output = document.getElementById("output");
    output.value = "";
}
// function to clear last input on screen
function clearLastInput()
{
    var output = document.getElementById("output");
    output.value = output.value.slice(0, -1);
}
// function to calculate input and show output on screen
function calculateInput()
{
    var output = document.getElementById("output");
    output.value = eval(output.value);
}
