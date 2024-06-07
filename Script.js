function func(){
    var output=document.getElementById("demo");
    var i;
    var password="";
    var values="ABCEDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^";
    for(i=0;i<9;i++){
        var newchar=Math.random()*values.length;
        password=password+values.charAt(newchar);
    }
    output.innerHTML=password;
}