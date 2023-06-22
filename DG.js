function reslt1()
{
    var p1 = parseInt(document.getElementById("Gper").value);
    var vl = parseInt(document.getElementById("amt").value);
    var no = parseInt(document.getElementById("no").value);
    var price = vl*no*(100 + p1)/100;
    document.getElementById("ans").value = price;
    document.getElementById("a").value = vl*no;
    document.getElementById("ab").value = vl*no*p1/100;
}
function reslt2()
{
    var p1 = parseInt(document.getElementById("Gper").value);
    var vl = parseInt(document.getElementById("amt").value);
    var no = parseInt(document.getElementById("no").value);
    var price = vl*no*(100 - p1)/100;
    document.getElementById("ans").value = price;
    document.getElementById("a").value = vl*no;
    document.getElementById("ab").value = vl*no*p1/100;
}
function clr ()
{
    document.getElementById("amt").value = "Enter Value";
}
function clr2 ()
{
    document.getElementById("no").value = "Quantity (1)";
}
function hm()
{
    window.location.pathname = "Index.html";
}
function secpg()
{
    window.location.pathname = "Dgst.html";
}