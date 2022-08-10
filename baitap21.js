function showConvert(){
    let Money = document.getElementById("money").value;
    let Form = document.getElementById("formcurrency").value;
    let To = document.getElementById("tocurrency").value;
    let result;

    if(Form == "VND" && To == "USD"){
        result = "result: " + (Money / 23000) + "$";
    }else if(Form == "USD" && To == "VND"){
        result = "result:" + (Money * 23000) + "VND";
    }else if(Form == "VND"){
        result = "result: " + Money + "VND";
    } else {
        result = "result: " + Money + "$";
    }
    document.getElementById('result').innerHTML = result;
}