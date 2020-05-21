let userName = document.getElementById('username');
let myGender = document.getElementById('gender');
let myEmail = document.getElementById('email');


function checkUserInfo(){
if ( userName.value == null || userName.value == ""){
    alert("please input your username");
    return false;
}


else if(myGender.checked == false){
    alert("please choose gender");
    return false;
}


else if (myEmail.value == false){
    alert("please fill your email");
    return false;
}

else {
    alert(" nice one");
    return true;
}

}
checkUserInfo();

