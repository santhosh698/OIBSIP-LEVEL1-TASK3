function convert()
{
var deg = parseFloat(document.getElementById('data').value);
var oper = document.getElementById('degree').value;
if(oper === 'F')
{
var f=parseFloat(deg*1.8)+32;
document.getElementById('res').innerHTML=f;
}
if(oper==='C')
{
var f=parseFloat(deg-32)/1.8;
document.getElementById("res").innerHTML=f; 
}
if(oper ==='K')
{
    var f=parseFloat(deg+273.5);
    document.getElementById("res").innerHTML=f;
}
}