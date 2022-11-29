document.write("<div class='container'>");

document.write("<h1 class='py-2> Notas Finales </h1>");
var alumno = prompt("Ingrese nombre del almuno:", "Carlos Guzman");

//utilizar description list de Bootstrap 
document.write("<dl class='row'>");
document.write("<dt class='col-sm-3'>Nombre: </dt><dd class='col-sm-9'>"+alumno+"</dd>");

var carrera = prompt("Ingrese Carrera:", "Desarrollo Web");
//utilizar description list de Bootstrap 
document.write("<dt class='col-sm-3'>Carrera: </dt><dd class='col-sm-9'>"+carrera+"</dd>");

//tabla
document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");

//cuerpo de la tabla
document.write("<tbody>");

//datos ramo 1
document.write("<tr>");
var r1 = prompt("Ingrese 1er ramo", "HTML");
var n1r1 = prompt("Ingrese nota 1 ["+r1+"]:", 7);
var n2r1 = prompt("Ingrese nota 2 ["+r1+"]:", 7);
var n3r1 = prompt("Ingrese nota 3 ["+r1+"]:", 7);
var promedio1 = (parseFloat(n1r1)+parseFloat(n2r1)+parseFloat(n3r1))/3;
document.write("<th scope='row'>"+r1+"</th>");
document.write("<th scope='row'>"+n1r1+"</th>");
document.write("<th scope='row'>"+n2r1+"</th>");
document.write("<th scope='row'>"+n3r1+"</th>");
document.write("<th scope='row'>"+promedio1.toFixed(1)+"</th>");
document.write("</tr>");

//datos ramo 2
document.write("<tr>");
var r2 = prompt("Ingrese 2do ramo", "CSS");
var n1r2 = prompt("Ingrese nota 1 ["+r2+"]:", 7);
var n2r2 = prompt("Ingrese nota 2 ["+r2+"]:", 7);
var n3r2 = prompt("Ingrese nota 3 ["+r2+"]:", 7);
var promedio2 = (parseFloat(n1r2)+parseFloat(n2r2)+parseFloat(n3r2))/3;
document.write("<th scope='row'>"+r2+"</th>");
document.write("<th scope='row'>"+n1r2+"</th>");
document.write("<th scope='row'>"+n2r2+"</th>");
document.write("<th scope='row'>"+n3r2+"</th>");
document.write("<th scope='row'>"+promedio2.toFixed(1)+"</th>");
document.write("</tr>");

//datos ramo 3
document.write("<tr>");
var r3 = prompt("Ingrese 3er ramo", "JS");
var n1r3 = prompt("Ingrese nota 1 ["+r3+"]:", 7);
var n2r3 = prompt("Ingrese nota 2 ["+r3+"]:", 7);
var n3r3 = prompt("Ingrese nota 3 ["+r3+"]:", 7);
var promedio3 = (parseFloat(n1r3)+parseFloat(n2r3)+parseFloat(n3r3))/3;
document.write("<th scope='row'>"+r3+"</th>");
document.write("<th scope='row'>"+n1r3+"</th>");
document.write("<th scope='row'>"+n2r3+"</th>");
document.write("<th scope='row'>"+n3r3+"</th>");
document.write("<th scope='row'>"+promedio3.toFixed(1)+"</th>");
document.write("</tr>");

//datos promedio todos los cursos
document.write("");
document.write("</div>");