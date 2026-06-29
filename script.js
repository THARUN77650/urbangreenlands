document.getElementById("leadForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let service=document.getElementById("service").value;
let message=document.getElementById("message").value;

let url=`https://wa.me/917702976853?text=
New Lead:%0AName:${name}%0APhone:${phone}%0AService:${service}%0AMessage:${message}`;

window.open(url,"_blank");

alert("Thank you! We will contact you soon.");

this.reset();

});
