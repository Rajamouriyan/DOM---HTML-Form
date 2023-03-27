let addnewRow = () => {
    // getting values of inputs
    let firstname = document.getElementById("first-name");
    let lastname = document.getElementById("last-name");
    let pincode = document.getElementById("pincode");
    let gender = document.getElementById("gender");
    let food = document.getElementById("food");
    let state = document.getElementById("state");
    let country = document.getElementById("country");
    let address = document.getElementById("address");
  
    //creating a table
    let tableVar = document.getElementById("table");
    let row = tableVar.insertRow();
    let td1 = row.insertCell(0);
    let td2 = row.insertCell(1);
    let td3 = row.insertCell(2);
    let td4 = row.insertCell(3);
    let td5 = row.insertCell(4);
    let td6 = row.insertCell(5);
    let td7 = row.insertCell(6);
    let td8 = row.insertCell(7);
 
  
    // generating the value from the input
    td1.innerHTML = firstname.value;
    td2.innerHTML = lastname.value;
    td3.innerHTML = pincode.value;
    td4.innerHTML = gender.value;
    td5.innerHTML =
      food.selectedOptions[0].value;
    td6.innerHTML = state.value;
    td7.innerHTML = country.value;
    td8.innerHTML = address.value;
  
    // emptying the elements after submit
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("food").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.getElementById("address").value = "";
  };