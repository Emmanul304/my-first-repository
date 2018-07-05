alert("This is not HTML, Its Java script");

function myFunction() {
  document.getElementById("demo").innerHTML = "This is not HTMll its Java";
  
}

function checkPassword() {
    console.log("Yes, that's a password");
    var password = document.getElementById("password").value;
	var username = document.getElementById("username").value;
	if  (username === "Emmanuel")
		alert(username + " is correct!");
    if (password === "swordfish") {
        console.log(password + " is correct!");
    }
	
}

/*
console.log("check if username correct");
if password correct:
console.log(logging in)
else:
alert("error")
*/