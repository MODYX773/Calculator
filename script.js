function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function appendToScreen(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Invalid input");
        clearScreen();
    }
}