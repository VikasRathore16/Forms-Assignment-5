//adding new user in the users function
function users() {
  var user = fetch();
  console.log(user);

  if (checkData(user.Name, user.Age, user.Weight) == 0) {
    if (5 <= user.Age <= 7) {
        if (user.Weight <= 15) {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} !!your weight is smaller than recommended value of ${user.Weight}kg at an age of ${user.Age}`;
        } else if (user.Weight >= 20) {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} !!your weight is greater than recommended value of ${user.Weight}}kg at an age of ${user.Age}`;
        } else {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} your weight is perfect !!`;
        }
      }
      if (8 <= user.Age <= 10) {
        if (user.Weight <= 21) {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} !!your weight is smaller than recommended value of ${user.Weight}kg at an age of ${user.Age}`;
        } else if (weight >= 25) {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} !!your weight is greater than recommended value of ${user.Weight}kg at an age of ${user.Age}`;
        } else {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} your weight is perfect !!`;
        }
      }
      if (16 <= user.Age <= 20) {
        if (user.Weight <= 31) {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} !!your weight is smaller than recommended value of ${user.Weight}kg at an age of ${user.Age}`;
        } else if (user.Weight >= 40) {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} !!your weight is greater than recommended value of ${user.Weight}kg at an age of ${user.Age}`;
        } else {
          document.getElementById(
            "msg"
          ).innerHTML = `hello ${user.Name} your weight is perfect !!`;
        }
      }
    }
}

//fetching input field data
function fetch() {
  var userName = document.getElementById("Name").value;
  var userAge = document.getElementById("Age").value;
  var userWeight = document.getElementById("Weight").value;
  console.log(userName, userAge, userWeight);
  return {
    Name: userName,
    Age: userAge,
    Weight: userWeight,
  };
}

//checking Data types of input field

function checkData(Name, Age, Weight) {
  var flag = 0;
  if (!isNaN(Name)) {
    flag = 1;
    alert("user Name should be String");
  }
  console.log(typeof Name);
  if (isNaN(Age)) {
    flag = 1;
    alert("user Age should be Number");
  }
  if (isNaN(Weight)) {
    flag = 1;
    alert("user weight should be Number");
  }
  if (parseInt(Age) < 5 || parseInt(Age) > 20) {
    flag = 1;
    alert("Age should be between 5 and 20");
  }
  console.log(flag);
  return flag;
}


