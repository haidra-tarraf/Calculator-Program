const display = document.getElementById('display');

document.onkeydown = function (event)
{
    document.activeElement.blur();
    if (isNaN(event.key) && event.key !== '.')
        switch (event.key)
        {
            case '*': case '-': case '+': case '/': event.preventDefault(); appendToDisplay(event.key); break;
            case 'Enter':
                event.preventDefault(); calculate(); break;
            case 'Escape':
                event.preventDefault(); clearDisplay(); break;
            case 'Backspace':
                event.preventDefault(); deleteChar(); break;
        }
    else if (event.key !== ' ')
    {
        event.preventDefault();
        appendToDisplay(event.key);
    }
}

function appendToDisplay(input)
{
    display.value += input;
}

function clearDisplay()
{
    display.value = '';
}

function deleteChar()
{
    display.value = display.value.slice(0, -1);
}
function calculate()
{
    try
    {
        display.value = eval(display.value);
    }
    catch (error)
    {
        window.alert("There is an error in your equation please check it again.");
    }
}