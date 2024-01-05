const fullName = prompt("Please enter your full name:", "John Doe");

const h2 = document.createElement("h2");
h2.textContent = fullName;

document.body.appendChild(h2);