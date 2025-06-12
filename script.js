
let input = "";

function addDigit(num) {
    if (input.length < 4) {
        input += num;
        document.getElementById("pass").value = "*".repeat(input.length);
    }
}

function clearInput() {
    input = "";
    document.getElementById("pass").value = "";
    document.getElementById("error").textContent = "";
}

function checkPass() {
    const correct = "1511"; // ใส่รหัสของคุณที่นี่

    if (input === correct) {
        window.location.href = "surprise.html";
    } else {
        document.getElementById("error").textContent = "รหัสผิด ลองอีกครั้ง";
        clearInput();
    }
}
