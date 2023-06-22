function Slct ()
{
    var v = document.getElementsByName("typ")[0].value;
    if(v == "Daily")
    {
    window.location.pathname = "Dgst.html";
    alert("For Multiple Items");
    }
    else
    {
    window.location.pathname = "Ggst.html";
    alert("For Large Quantity");
    }
}
document.getElementsByTagName("head").innerHTML = '';