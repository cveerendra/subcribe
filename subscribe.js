var count=0;
function subscribebutton(){
    var valuefrombutton=document.getElementById("button").valuefrombutton
    if(valuefrombutton=="Subscribe")
    {
        document.getElementById("message").innerHtml="Subscribe"
        document.getElementById("button").setAttribute("value","Subscribed")
        document.getElementById("buttonicon").style.display="inline"
        document.getElementById("dropdownicon").style.display=inline
    }
    ++count;
    if(count>1)
    {
        document.getElementById("container").style.display="block"
    }
}
function discount(){
    document.getElementById("container").style.display="none"
}
function replaceicon(iconval)
{
    if(iconval=="All")
    {
        document.getElementById("buttonicon").src="bell.jpg"
    }
    else if(iconval=="Per")
    {
        document.getElementById("buttonicon").src="ring.png"
    }
    else if(iconval=="none")
    {
        document.getElementById("buttonicon").src="unsubscribe.jpg"
    }
    else{
        document.getElementById("unsubscribe").style.display="flex"

    }
}
function unsubscribenone()
{
    document.getElementById("unsubscribe").style.display="none"
}
function unsubscribe()
{
    document.getElementById("buttonicon").style.display="none"
    document.getElementById("dropdownicon").style.display="none"
    document.getElementById("message").innerHTML="subscribe"
    document.getElementById("button").setAttribute("value","subscribe")
    document.getElementById("message").style.display="none"


}