function showInput(form) 
{	
    var string1=document.getElementById('fname');
    var string2=document.getElementById('username');
    var string3=document.getElementById('password');
    var string4=document.getElementById('password2');
    var string5=document.getElementById('email');
    var string5=document.getElementById('mnumber');
    var string5=document.getElementById('cidnumber');
    
    if(string3==string4)
    {
        document.getElementById('display1').innerHTML=document.getElementById('fname'); 
        document.getElementById('display2').innerHTML=document.getElementById('username'); 
        document.getElementById('display3').innerHTML=document.getElementById('email'); 
        document.getElementById('display4').innerHTML=document.getElementById('mnumber');
        document.getElementById('display5').innerHTML=document.getElementById('cidnumber'); 

    }
    else
    {
        alert("Password mismatch!!!");
    }
    <center> Name            :-<p id='display1'></p></center>
    <center> Username        :-<p id='display2'></p></center>
    <center> E-Mail          :-<p id='display3'></p></center>
    <center> Mobile Number   :-<p id='display4'></p></center>
    <center> CollageId Number:-<p id='display5'></p></center>
} 
