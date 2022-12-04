function soma(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    var resp = document.getElementById("resp");

    resp.innerHTML = parseInt(num1) + parseInt(num2) + parseInt(num3);
}

