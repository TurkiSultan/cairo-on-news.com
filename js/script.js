var change = document.getElementById("body");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var f_controaler = document.getElementById("f_controaler");
var f_controaler2 = document.getElementById("f_controaler2");
var footer_end = document.getElementById("footer_end");



function night() {
    change.classList.toggle("black");
    p1.classList.toggle("all_p");
    p2.classList.toggle("all_p");
    p3.classList.toggle("all_p");
    p4.classList.toggle("all_p");
    f_controaler.classList.toggle("form_controaler");
    f_controaler2.classList.toggle("form_controaler");
    footer_end.classList.toggle("orang");
  
}