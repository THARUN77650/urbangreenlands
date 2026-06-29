document.getElementById("leadForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let service = document.getElementById("service").value;
let message = document.getElementById("message").value;

// WhatsApp Lead Send
let url = `https://wa.me/917702976853?text=
New Lead:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Service: ${service}%0A
Message: ${message}`;

window.open(url, "_blank");

alert("Thank you! We will contact you soon.");

this.reset();

});
