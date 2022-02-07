

//adding new user in the users function
function users() {
    var user = fetch();
    console.log(user);
    
    if (checkData(user.Name, user.Age, user.Weight) == 0) {
        if (user.Age >= 5 || user.Age <= 7) {
            document.getElementById("msg").innerHTML = "Hello " + user.Name + " !!! Your recommended weight is " + "15 KG " + " at the Age of " + user.Age + " but your weight is " + user.Weight + " KG";
        }
        else if (user.Age >= 8 || user.Age <= 10) {
            document.getElementById("msg").innerHTML = "Hello " + user.Name + " !!! Your recommended weight is " + "21 KG " + " at the Age of " + user.Age + " but your weight is " + user.Weight + " KG";
        }
        else if (user.Age >= 11 || user.Age <= 15) {
            document.getElementById("msg").innerHTML = "Hello " + user.Name + " !!! Your recommended weight is " + "26 KG " + " at the Age of " + user.Age + " but your weight is " + user.Weight + " KG";
        }
        else if (user.Age >= 16 || user.Age <= 20) {
            document.getElementById("msg").innerHTML = "Hello " + user.Name + " !!! Your recommended weight is " + "31 KG " + " at the Age of " + user.Age + " but your weight is " + user.Weight + " KG";
        }
    }
    
}


//fetching input field data
function fetch() {
    var userName = document.getElementById("Name").value;
    var userAge = document.getElementById("Age").value;
    var userWeight = document.getElementById("Weight").value;
    console.log(userName, userAge, userWeight)
    return {
        "Name": userName,
        "Age": userAge,
        "Weight": userWeight
    };
}

//checking Data types of input field

function checkData(Name, Age, Weight) {
    var flag = 0;
    if (!isNaN(Name)) {
        flag = 1;
        alert("user Name should be String");
    }
    console.log(typeof (Name))
    if (isNaN(Age)) {
        flag = 1;
        alert("user Age should be Number")
    }
    if (isNaN(Weight)) {
        flag = 1;
        alert("user weight should be Number")
    }
    if(parseInt(Age) < 5  || parseInt(Age) >20){
        flag=1;
        alert("Age should be between 5 and 20")
    }
    console.log(flag);
    return flag;


}

