//tag selector
const h=window.document.getElementsByTagName("h1");
console.log(h[0]);

//id selector
const i=window.document.getElementById("a");
console.log(i);

//class selector
const c=window.document.getElementsByClassName("para");
console.log(c[0]);
console.log(c[1]);

//query selector
const q=window.document.querySelector("#a");
console.log(q);
//query selector all
const qa=window.document.querySelectorAll(".para");
console.log(qa[0].textContent);

i.textContent="This is a heading";


i.style.color="red";

i.classList.add("qa");

i.classList.toggle("as1");

